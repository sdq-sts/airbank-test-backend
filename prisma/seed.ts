import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const deleteAccountData = prisma.account.deleteMany();
  const deleteCategoryData = prisma.category.deleteMany();
  const deleteTransactionsData = prisma.transaction.deleteMany();
  await Promise.all([
    deleteAccountData,
    deleteCategoryData,
    deleteTransactionsData,
  ]);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
