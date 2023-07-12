const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      firstName: "Alice",
      lastName: "Bradford",
      username: "alisonbrad",
      email: "alice@prisma.io",
      password: "password",
      hourlyWage: 0,
      bankSum: 2000,
      subCategory: {
        create: {
          name: "Groceries",
          category: "Essentials",
          currentAmount: 30,
          totalAmount: 40,
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null });

  const allBudgets = await prisma.subCategory.findMany();
  console.dir(allBudgets, { depth: null });

  const firstUser = await prisma.user.findFirst({
    where: { firstName: "Alice" },
  });

  // const newBudget = await prisma.subCategory.create({ data: {} });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
