import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.account.deleteMany();
  const anon = await prisma.account.create({
    data: {
      id: 'c5f3f93c-bf33-402e-a9f1-c15c148d451b',
      name: 'Anonymous',
      bank: 'iBank',
    },
  });

  console.log(anon);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
