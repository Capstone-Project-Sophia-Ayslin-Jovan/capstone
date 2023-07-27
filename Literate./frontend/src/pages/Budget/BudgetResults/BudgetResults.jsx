"use client";
import React, { useContext } from "react";
import "./BudgetResults.css";
import { Button, Spacer, Text, Row, Grid } from "@nextui-org/react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SubCategoryResults from "../SubCategoryResults/SubCategoryResults";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthorizeContext } from "../../../contexts/authUser";
import { BudgetContext } from "../../../contexts/budget";
import apiClient from "../../../services/apiClient";
import { Pie } from "react-chartjs-2";
const BudgetResults = ({ budgetInfo, handlePreviousStep }) => {
  const navigate = useNavigate();
  const { setAuthState, setInitialized } = useContext(AuthorizeContext);
  const { setBudgetInfo } = useContext(BudgetContext);
  for (let key in budgetInfo.budgetData) {
    budgetInfo.budgetData[key] = budgetInfo.budgetData[key].filter(
      (obj) => obj.name !== "" && obj.allocation !== 0
    );
  }

  const handleSubmitResults = async () => {
    await apiClient.createBudget(budgetInfo);
    setInitialized(false);
    navigate("/Home");
  };

  return (
    <div>
      <Text h1>Your Budget: $ {budgetInfo.total}</Text>
      <div className="grid">
        {Object.keys(budgetInfo.budgetData).map((key, index) => (
          <div key={index}>
            <SubCategoryResults
              category={key}
              categoryValues={budgetInfo.budgetData[key]}
            />
          </div>
        ))}
      </div>

      <Row>
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleSubmitResults}>Finish</Button>
      </Row>
    </div>
  );
};

export default BudgetResults;
