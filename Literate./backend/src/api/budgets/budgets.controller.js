const express = require("express");
const router = express.Router();
const budgetService = require("./budgets.service");

router.post("/budget", async function (req, res, next) {
  try {
    const { budget } = await budgetService.createBudget(req.body);
    return res.status(200).json({ budget });
  } catch (err) {
    next(err);
  }
});
router.get("/budget/:id", async (req, res, next) => {
  try {
    const budget = await budgetService.getBudget(req.params.id);
    return res.status(200).json(budget);
  } catch (err) {
    next(err);
  }
});
router.put("/budget/:id", async function (req, res, next) {
  try {
    const { updatedBudget } = await budgetService.updateBudget(
      req.params.id,
      req.body
    );
    return res.status(200).json({ updatedBudget });
  } catch (err) {
    next(err);
  }
});
// router.get("/:id", async (req, res, next) => {
//   try {
//     const budgetsInfo = await budgetService.getAllBudgets(req.params.id);
//     return res.status(200).json({ budgetsInfo });
//   } catch (err) {
//     next(err);
//   }
// });
module.exports = router;
