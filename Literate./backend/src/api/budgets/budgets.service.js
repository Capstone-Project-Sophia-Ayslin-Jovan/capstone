const { validateFields } = require("../../utils/validate");
const userService = require("../users/users.service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//creates new budget for given user
const createBudget = async function (data) {
  const { userId, name, goal, startDate, endDate, budgetData } = data;

  // We need more validation later
  // const requiredCreds = ["userId", "total", "subCategories"];
  // validateFields({
  //   required: requiredCreds,
  //   obj: { userId, total, subCategories },
  //   location: "Backend: Create Budget",
  // });

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
  const subCategories = [];
  for (let catName in budgetData) {
    for (let subCatObj of budgetData[catName]) {
      subCatObj["category"] = catName;
      subCatObj.allocation = parseFloat(subCatObj.allocation);
      subCategories.push(subCatObj);
    }
  }
  console.log("User Id", userId);
  const budget = await prisma.budget.create({
    data: {
      name: name,
      goal: parseFloat(goal),
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      subCategories: {
        create: subCategories,
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
    include: {
      subCategories: true,
    },
  });

  return { budget };
};

const getBudget = async (userId) => {
  //This has been updated to use userId
  console.log(userId);
  const budgetData = await prisma.budget.findUnique({
    where: { userId: userId },
    include: {
      subCategories: true,
    },
  });
  if (!budgetData) return null;
  let budgetObj = {};
  const fields = ["id", "name", "allocation", "totalSpent", "updated_at"];
  for (let x of budgetData.subCategories) {
    const obj = {};
    for (let y of fields) {
      obj[y] = x[y];
    }

    if (Object.keys(budgetObj).includes(x.category)) {
      budgetObj[x.category].push(obj);
    } else {
      budgetObj[x.category] = [obj];
    }
  }

  function orderObjectByKeysAndName(obj, order) {
    const orderedObj = {};

    order.forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        const orderedArray = obj[key].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        orderedObj[key] = orderedArray;
        delete obj[key];
      }
    });

    for (const key in obj) {
      orderedObj[key] = obj[key];
    }

    return orderedObj;
  }

  const orderedCategories = orderObjectByKeysAndName(
    budgetObj,
    Object.keys(budgetObj).sort()
  );

  const budget = {
    id: budgetData.id,
    name: budgetData.name,
    goal: budgetData.goal,
    startDate: budgetData.startDate,
    endDate: budgetData.endDate,
    budgetData: orderedCategories,
  };
  return { budget };
};

// id is subcategory id !!!
const updateBudget = async (id, { newExpense }) => {
  // Data validation
  const subCategory = await prisma.subCategory.findUnique({
    where: { id: id },
  });

  const updatedSubCategory = await prisma.subCategory.update({
    where: { id: id },
    data: { totalSpent: subCategory.totalSpent + parseFloat(newExpense) },
  });

  return { updatedSubCategory };
};

const deleteBudget = async (id) => {
  const deletedBudget = await prisma.budget.delete({ where: { id: id } });
  return { deletedBudget };
};

const getBudgetStats = async (id) => {
  const subCategories = await prisma.subCategory.findMany({
    where: { budgetId: id },
  });
  let budgetTotalSpent = 0;
  let budgetTotalAllocation = 0;
  for (let entry of subCategories) {
    budgetTotalSpent += entry.totalSpent;
    budgetTotalAllocation += entry.allocation;
  }
  const budgetTotalRemaining = budgetTotalAllocation - budgetTotalSpent;
  return { budgetTotalSpent, budgetTotalAllocation, budgetTotalRemaining };
};

const getStats = async (id, category) => {
  console.log(category);
  const subCategories = await prisma.subCategory.findMany({
    where: { budgetId: id, category: category },
  });
  let catTotalSpent = 0;
  let catTotalAllocation = 0;
  for (let entry of subCategories) {
    catTotalSpent += entry.totalSpent;
    catTotalAllocation += entry.allocation;
  }
  const catTotalRemaining = catTotalAllocation - catTotalSpent;

  const catStats = {
    catTotalSpent: catTotalSpent,
    catTotalAllocation: catTotalAllocation,
    catTotalRemaining: catTotalRemaining,
  };

  const budgetStats = await getBudgetStats(id);
  return { budgetStats, catStats };
};

module.exports = {
  createBudget,
  getBudget,
  updateBudget,
  deleteBudget,
  getStats,
};
