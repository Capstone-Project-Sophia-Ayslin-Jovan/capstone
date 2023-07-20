const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//creates new budget for given user
const createBudget = async function (data) {
  const { userId, budgetData } = data;
  const budget = await prisma.budget.create({
    data: {
      budgetTotal: budgetData.budgetTotal,
      subCategory: {
        create: {
          totalSpent: budgetData.subCategory.totalSpent,
          category: budgetData.subCategory.category,
          allocation: budgetData.subCategory.allocation,
          name: budgetData.subCategory.name,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
    include: {
      subCategory: true,
    },
  });
  console.log(budget);
  return { budget };
};
module.exports = { createBudget };
