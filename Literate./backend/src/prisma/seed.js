const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config/config");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const alicePass = await bcrypt.hash("password123", BCRYPT_WORK_FACTOR);
  const user = await prisma.user.create({
    data: {
      firstName: "Alice",
      lastName: "Bradford",
      username: "alisonbrad",
      email: "alice@prisma.io",
      password: alicePass,
      imageUrl: "sample.png",
      // subCategories: {
      //   create: {
      //     name: "Groceries",
      //     category: "Essentials",
      //     currentAmount: 30,
      //     totalAmount: 40,
      //   },
      // },
    },
  });
  // const newBudget = await prisma.user.update({
  //   where: { id: user.id },
  //   data: {
  //     subCategories: {
  //       create: {
  //         name: "Household Supplies",
  //         category: "Essentials",
  //         currentAmount: 20,
  //         totalAmount: 50,
  //       },
  //     },
  //   },
  // });
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
