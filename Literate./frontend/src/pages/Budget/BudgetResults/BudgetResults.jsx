"use client";
import React, { useContext, useEffect, useState } from "react";
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
  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([]);
  const navigate = useNavigate();
  const { setAuthState, setInitialized } = useContext(AuthorizeContext);
  const { setBudgetInfo } = useContext(BudgetContext);
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

  console.log("after mapping");
  const handleSubmitResults = async () => {
    await apiClient.createBudget(budgetInfo);
    setInitialized(false);
    navigate("/Home");
  };

  const data = {
    labels: budgetLabels,
    datasets: [
      {
        label: "$ for the month",
        data: subCatSum,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(54, 162, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
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
      </Container>
      </div>
      <div className="piechart">
        <Pie data={data} />
      </div>
      <Row>
        <Button size={"xl"} onPress={handlePreviousStep}>
          Back
        </Button>
        <Spacer x={1} />
        <Button size={"xl"} onPress={handleSubmitResults}>
          Finish
        </Button>
      </Row>
    </div>
  );
};

export default BudgetResults;
