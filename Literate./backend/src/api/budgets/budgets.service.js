const { validateFields } = require("../../utils/validate");

const { PrismaClient } = require("@prisma/client");
const { all } = require("./budgets.controller");
const prisma = new PrismaClient();
//creates new budget for given user
const createBudget = async function (data) {
  // Rewrite this to make it cleaner later
  const { userId, budgetData } = data;
  const { name, total, subCategories } = budgetData;

  // We need more validation later
  const requiredCreds = ["userId", "total", "subCategories"];
  validateFields({
    required: requiredCreds,
    obj: { userId, total, subCategories },
    location: "Backend: Create Budget",
  });

  // // Should validate for each category
  // // Normalize in database as wella
  // const subCategoryData = [];
  // for (let subCategory of subCategories) {
  //   subCategoryData.push({
  //     name: subCategory.name,
  //     category: subCategory.category,
  //     allocation: subCategory.allocation,
  //     totalSpent: subCategory.totalSpent,
  //   });
  // }

  const budget = await prisma.budget.create({
    data: {
      name: name,
      total: total,
      subCategory: {
        create: subCategories,
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

const getBudget = async (id) => {
  const budget = await prisma.budget.findUnique({
    where: { id: id },
    include: {
      subCategory: true,
    },
  });
  return { budget };
};
const updateBudget = async (id, { budgetData }) => {
  // Should the id be the userId or the budgetId, for now I think budgetId works best
  const { subCategories } = budgetData;
  console.log(subCategories);
  // Data validation
  const deleteBudget = await prisma.budget.update({
    where: { id: id },
    data: { subCategory: { deleteMany: {} } },
  });
  const updatedBudget = await prisma.budget.update({
    where: { id: id },
    data: {
      subCategory: {
        create: subCategories,
      },
    },
    include: {
      subCategory: true,
    },
  });
  return { updatedBudget };
};
module.exports = {
  createBudget,
  getBudget,
  updateBudget,
};
