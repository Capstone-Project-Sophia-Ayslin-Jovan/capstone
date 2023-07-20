const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//creates new budget for given user
const createBudget = async function (userId, data) {
  console.log("USER ID", userId);
  const budget = await prisma.budget.create({
    where: { id: userId },
    data: {
      Budget: {
        budgetTotal: "data.budgetGoal",
        subCategory: [
          {
            totalSpent: 0,
            name: "data.subCatName",
            category: "data.category",
            allocation: 0,
          },
        ],
      },
    },
  });
  return { budget };
};
module.exports = { createBudget };
