import React, { useContext, useEffect, useState } from "react";
import "./BudgetResults.css";
import {
  Button,
  Spacer,
  Text,
  Row,
  Grid,
  Card,
  Container,
} from "@nextui-org/react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SubCategoryResults from "../SubCategoryResults/SubCategoryResults";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthorizeContext } from "../../../contexts/authUser";

import { NewBudgetContext } from "../../../contexts/newBudget";

const BudgetResults = ({ budgetLeft }) => {
  // Access the new budget context
  const { newBudget } = useContext(NewBudgetContext);

  // Filter out empty or zero allocation entries
  for (let key in newBudget.budgetData) {
    newBudget.budgetData[key] = newBudget.budgetData[key].filter(
      (obj) => obj.name !== "" && obj.allocation !== 0
    );
  }

  // Extract budget labels and calculate sub-category sums
  const budgetLabels = Object.keys(newBudget.budgetData);
  const subCatSum = new Array(budgetLabels.length).fill(0);

  // Calculate sub-category sums for each category
  Object.keys(newBudget.budgetData).map((category, index) =>
    newBudget.budgetData[category].map((listItem) => {
      subCatSum[index] += parseInt(listItem.allocation);
    })
  );

  return (
    <>
      {/* Display the budget name */}
      <Text h1 css={{ textAlign: "center" }}>
        {newBudget.name}
      </Text>
      <Spacer y={1} />

      {/* Grid container for displaying sub-category results */}
      <Grid.Container gap={2} justify="center">
        {/* Map through sub-categories and display results */}
        {Object.keys(newBudget.budgetData).map((key, index) => (
          <Grid key={index} md={12}>
            <SubCategoryResults
              category={key}
              categoryValues={newBudget.budgetData[key]}
            />
          </Grid>
        ))}
      </Grid.Container>

      {/* Display budget goal and remaining budget */}
      <Text size={20} css={{ textAlign: "center" }}>
        Budget Goal: ${newBudget.goal} &emsp; Budget Left: ${budgetLeft}
      </Text>
    </>
  );
};

export default BudgetResults;
