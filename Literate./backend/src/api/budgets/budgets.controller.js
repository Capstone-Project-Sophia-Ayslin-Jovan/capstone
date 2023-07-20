const express = require("express");
const router = express.Router();
const budgetService = require("./budgets.service");

router.post("/", async function (req, res, next) {
  try {
    const { budgetInfo } = await budgetService.createBudget(req.body);
    return res.status(200).json({ budgetInfo });
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { budgetInfo } = await budgetService.getBudget(req.params.id);
    return res.status(200).json({ budgetInfo });
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async function (req, res, next) {
  try {
    const { updatedBudgetInfo } = await userService.updateBudget(
      req.params.id,
      req.body
    );
    return res.status(200).json({ updatedBudgetInfo });
  } catch (err) {
    next(err);
  }
});
// router.get("/budgets/:id", async (req, res, next) => {
//   try {
//     const budgetsInfo = await budgetService.getAllBudgets(req.params.id);
//     return res.status(200).json({ budgetsInfo });
//   } catch (err) {
//     next(err);
//   }
// });
module.exports = router;
