"use client";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BudgetResults from "./BudgetResults/BudgetResults";
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetGoal from "./BudgetGoal/BudgetGoal";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";
// import Home from "../Home/Home";

const Budget = () => {
  // Perhaps change to context
  const [budgetInfo, setBudgetInfo] = useState({
    budgetGoal: 0,
    budgetCategories: {},
  });

  const [step, setStep] = useState(0);
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 0:
      return (
        <BudgetLanding
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 1:
      return (
        <BudgetGoal
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 2:
      return (
        <BudgetCategory
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 3:
      return (
        <BudgetExpenses
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 4:
      return (
        <BudgetResults
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
  }
};

export default Budget;
