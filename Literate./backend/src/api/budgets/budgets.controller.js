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
router.get("/budget/:userId", async (req, res, next) => {
  try {
    const budget = await budgetService.getBudget(req.params.userId);
    return res.status(200).json(budget);
  } catch (err) {
    next(err);
  }
});
router.put("/budget/:id", async function (req, res, next) {
  try {
    const { updatedSubCategory } = await budgetService.updateBudget(
      req.params.id,
      req.body
    );
    return res.status(200).json({ updatedSubCategory });
  } catch (err) {
    next(err);
  }
});

router.delete("/budget/:id", async function (req, res, next) {
  try {
    const { deletedBudget } = await budgetService.deleteBudget(req.params.id);
    return res.status(200).json({ deletedBudget });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
