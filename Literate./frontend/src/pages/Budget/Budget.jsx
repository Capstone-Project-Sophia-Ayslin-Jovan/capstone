"use client";
import React, { useState, useContext, useEffect } from "react";
import BudgetResults from "./BudgetResults/BudgetResults";
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetGoal from "./BudgetGoal/BudgetGoal";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";
import { AuthorizeContext } from "../../contexts/authUser";
import apiClient from "../../services/apiClient";

const Budget = ({ handleToggle, isOpen }) => {
  const [budgetInfo, setBudgetInfo] = useState({
    name: "",
    total: 0,
    subCategory: [],
    hasBudget: false,
  });

  const { authState } = useContext(AuthorizeContext);
  useEffect(() => {
    const fetchUserBudget = async () => {
      if (authState.user !== null) {
        const data = await apiClient.getBudget(authState.user.currBudgetId);
        const budget = data.data.budget;
        if (budget !== null) {
          let subCatArray = [];
          console.log(budget.subCategory);
          for (let x of budget.subCategory) {
            const foundObject = subCatArray.find((obj) =>
              Object.keys(obj).includes(x.category)
            );
            if (!foundObject)
              subCatArray.push({
                [x.category]: [{ name: x.name, allocation: x.allocation }],
              });
            else
              foundObject[x.category].push({
                name: x.name,
                allocation: x.allocation,
              });
          }
          console.log(subCatArray);
          setBudgetInfo({
            name: budget.name,
            total: budget.total,
            subCategories: subCatArray,
            hasBudget: true,
          });
        }
      }
    };
    fetchUserBudget();
  }, [authState.user]);

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
        <BudgetGoal
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleToggle={handleToggle}
          isOpen={isOpen}
        />
      );
    case 2:
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
    case 3:
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
    case 4:
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
