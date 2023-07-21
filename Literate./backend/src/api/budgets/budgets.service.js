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

const getBudget = async (budgetId) => {
  try {
    console.log(budgetId);
    const budgetInfo = await prisma.budget.findUnique({
      where: { id: budgetId },
      include: {
        subCategory: true,
      },
    });
    return { budgetInfo };
  } catch (err) {
    throw err;
  }
};
const updateBudget = async (budgetId) => {
  try {
    const { userId, budgetData } = data;
    const updatedBudget = await prisma.budget.update({
      where: { id: budgetId },
      update: {
        //might not need this clause tbh
        data: {
          budgetTotal: budgetData.newTotal,
          subCategory: {
            totalSpent: budgetData.subCategory.newTotalSpent,
            category: budgetData.subCategory.newCategory,
            allocation: budgetData.subCategory.newAllocation,
            name: budgetData.subCategory.newName,
          },
        },
      },
      include: {
        subCategory: true,
      },
    });
    return { updatedBudget };
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createBudget,
  getBudget,
  updateBudget,
};
