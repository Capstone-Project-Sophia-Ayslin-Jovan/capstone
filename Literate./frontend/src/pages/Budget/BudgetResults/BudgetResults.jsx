"use client";
import React, { useContext, useEffect, useState } from "react";
import "./BudgetResults.css";
import { Button, Spacer, Text, Row, Grid } from "@nextui-org/react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SubCategoryResults from "../SubCategoryResults/SubCategoryResults";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthorizeContext } from "../../../contexts/authUser";
import apiClient from "../../../services/apiClient";
import { Pie } from "react-chartjs-2";
const BudgetResults = ({ budgetInfo }) => {
  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const navigate = useNavigate();
  
  const { setAuthState, setInitialized } = useContext(AuthorizeContext);

  for (let key in budgetInfo.budgetData) {
    budgetInfo.budgetData[key] = budgetInfo.budgetData[key].filter(
      (obj) => obj.name !== "" && obj.allocation !== 0
    );
  }
  const budgetLabels = Object.keys(budgetInfo.budgetData);
  // setLabels(budgetLabels);
  const subCatSum = new Array(budgetLabels.length).fill(0);
  Object.keys(budgetInfo.budgetData).map((category, index) =>
    budgetInfo.budgetData[category].map((listItem) => {
      subCatSum[index] += parseInt(listItem.allocation);
    })
  );
  const handleSubmitResults = async () => {
    console.log(budgetInfo);
    await apiClient.createBudget(budgetInfo);
    setAuthState((state) => ({ ...state, isAuthenticated: true }));
    navigate("/Dashboard");
  };

  return (
    <>
      <div>
        <Text h1>
          {budgetInfo.name}: $ {budgetInfo.total}
        </Text>
        <Spacer y={4} />
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
      </div>
    </>
  );
};
export default BudgetResults;
