"use client";
import React, { useState } from "react";
import BudgetResults from "./BudgetResults/BudgetResults";
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetGoal from "./BudgetGoal/BudgetGoal";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";

const Budget = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  if (step === 1) {
    return <BudgetLanding handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}  />;
  } else if (step === 2) {
    return <BudgetGoal handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}  />;
  } else if (step === 3) {
    return <BudgetCategory handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}  />;
  } else if (step === 4) {
    return <BudgetExpenses handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}  />;
  }
  else if (step === 5) {
    return <BudgetResults handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}  />;
  }
};

export default Budget;
