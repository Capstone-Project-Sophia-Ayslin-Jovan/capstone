"use client";
import React, { useState, useContext, useEffect } from "react";
import BudgetResults from "./BudgetResults/BudgetResults";
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetGoal from "./BudgetGoal/BudgetGoal";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";
import { BudgetContext } from "../../contexts/budget";
import NameAndDate from "./NameAndDate/NameAndDate";

const Budget = ({ handleToggle, isOpen }) => {
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);

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
          handleToggle={handleToggle}
          isOpen={isOpen}
        />
      );
    case 1:
      return (
        <NameAndDate
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 2:
      return (
        <BudgetGoal
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      );
    case 3:
      return (
        <BudgetCategory
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleToggle={handleToggle}
          isOpen={isOpen}
        />
      );
    case 4:
      return (
        <BudgetExpenses
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleToggle={handleToggle}
          isOpen={isOpen}
        />
      );
    case 5:
      return (
        <BudgetResults
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleToggle={handleToggle}
          isOpen={isOpen}
        />
      );
  }
};

export default Budget;
