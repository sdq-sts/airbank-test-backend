import { PrismaClient } from '@prisma/client';
import { createReadStream } from 'node:fs';
import * as path from 'node:path';
import { parse } from 'fast-csv';

type AccountRow = {
  id: string;
  name: string;
  bank: string;
};

type CategoryRow = {
  id: string;
  name: string;
  color: string;
};

type RelationLists = {
  accountList: AccountRow[];
  categoryList: CategoryRow[];
};

type TransactionRow = {
  id: string;
  reference: string;
  amount: number;
  currency: string;
  created_at: Date;
  account: {
    connectOrCreate: {
      where: { id: string };
      create: { name: string; bank: string };
    };
  };
  category?: {
    connectOrCreate: {
      where: { id: string };
      create: { name: string; color: string };
    };
  };
};

const CHUNK_SIZE = 40;

function parseRowAmount(row: TransactionRow) {
  if (row.amount) {
    row.amount = +row.amount;
  }
  return row;
}
function parseRowStringToDate(row: TransactionRow) {
  if (row.created_at) {
    row.created_at = new Date(row.created_at);
  }
  return row;
}

function readCSV<T>(
  path: string,
  headers: string[],
  relationLists?: RelationLists,
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const data: T[] = [];

    createReadStream(path)
      .pipe(parse({ headers, skipRows: 1 }))
      .on('error', () => reject)
      .on('data', (row) => {
        row = parseRowAmount(row);
        row = parseRowStringToDate(row);
        const { account_id, category_id, ...newRow } = row;

        if (relationLists) {
          const { id: accountId, ...accountCreateData } =
            relationLists.accountList.find(
              (el: AccountRow) => el.id === account_id,
            );

          const foundCategory = relationLists.categoryList.find(
            (el: CategoryRow) => el.id === category_id,
          );
          const categoryId = foundCategory?.id;
          const categoryCreateData = {
            name: foundCategory?.name,
            color: foundCategory?.color,
          };

          const transactionRow = {
            ...newRow,
            ...(accountId && {
              account: {
                connectOrCreate: {
                  where: { id: accountId },
                  create: { ...accountCreateData },
                },
              },
            }),
            ...(categoryId && {
              category: {
                connectOrCreate: {
                  where: { id: categoryId },
                  create: { ...categoryCreateData },
                },
              },
            }),
          };

          data.push(transactionRow);
        } else {
          data.push(newRow);
        }
      })
      .on('end', () => {
        resolve(data);
      });
  });
}

function splitToChunks<T>(array: T[], parts: number) {
  const result = [];

  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }

  return result;
}

const prisma = new PrismaClient();

async function main() {
  const deleteTransactionsData = prisma.transaction.deleteMany();
  const deleteCategoryData = prisma.category.deleteMany();
  const deleteAccountData = prisma.account.deleteMany();
  await prisma.$transaction([
    deleteTransactionsData,
    deleteAccountData,
    deleteCategoryData,
  ]);
  console.log(`Deleted database records`);

  const accountHeaders = ['id', 'name', 'bank'];
  const categoryHeaders = ['id', 'name', 'color'];
  const transactionHeaders = [
    'id',
    'account_id',
    'category_id',
    'reference',
    'amount',
    'currency',
    'created_at',
  ];

  const accountCSVData = await readCSV<AccountRow>(
    path.resolve(__dirname, 'seeds', 'accounts.csv'),
    accountHeaders,
  );
  const categoryCSVData = await readCSV<CategoryRow>(
    path.resolve(__dirname, 'seeds', 'categories.csv'),
    categoryHeaders,
  );
  const transactionCSVData = await readCSV<TransactionRow>(
    path.resolve(__dirname, 'seeds', 'transactions.csv'),
    transactionHeaders,
    { accountList: accountCSVData, categoryList: categoryCSVData },
  );

  console.log('Parsed CSV data');

  const accountPrismaPromise = prisma.account.createMany({
    data: accountCSVData,
  });

  const categoryPrismaPromise = prisma.category.createMany({
    data: categoryCSVData,
  });

  await Promise.all([accountPrismaPromise, categoryPrismaPromise]);

  const transactionChunks = splitToChunks<TransactionRow>(
    [...transactionCSVData],
    CHUNK_SIZE,
  );
  let recordsAddedToDatabase = 0;

  for (const chunk of transactionChunks) {
    const promises: Promise<TransactionRow>[] = chunk.map(
      (transactionData: TransactionRow) =>
        prisma.transaction.create({ data: transactionData }),
    );
    const result = await Promise.all(promises);
    recordsAddedToDatabase += result.length;
    console.log(
      `${recordsAddedToDatabase} of ${transactionCSVData.length} records added to the database`,
    );
  }

  console.log('DONE!');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
