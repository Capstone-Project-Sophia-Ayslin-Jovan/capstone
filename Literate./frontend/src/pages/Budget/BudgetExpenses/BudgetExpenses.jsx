"use client";
import React, { useState, useEffect, useContext } from "react";
import {
  Navbar,
  Button,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
  Grid,
} from "@nextui-org/react";
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";

const BudgetExpenses = ({ budgetInfo, setBudgetInfo, setIsDisabled }) => {
  const [budgetLeft, setBudgetLeft] = useState(budgetInfo.goal);

  useEffect(() => {
    setIsDisabled(true);
    const filteredEmpty = Object.keys(budgetInfo.budgetData).filter((value) => {
      if (budgetInfo.budgetData[value].length === 0) return true;
      if (
        budgetInfo.budgetData[value][0].name === null ||
        budgetInfo.budgetData[value][0].name === "" ||
        budgetInfo.budgetData[value][0].allocation === null ||
        budgetInfo.budgetData[value][0].allocation === ""
      )
        return true;
    });
    if (filteredEmpty.length === 0) {
      setIsDisabled(false);
    }
    let totalExpenses = 0;
    for (let category in budgetInfo.budgetData) {
      for (let subCategory of budgetInfo.budgetData[category]) {
        if (subCategory.allocation !== null && subCategory.allocation !== "")
          totalExpenses += parseInt(subCategory.allocation);
      }
    }
    setBudgetLeft(parseInt(budgetInfo.goal) - totalExpenses);
  }, [budgetInfo]);
  return (
    <Container>
      <Grid.Container justify="center" gap={2}>
        <Grid>
          <Text h2 weight="bold">
            Allocate Money Towards Your Expenses
          </Text>
          <Text h3 css={{ textAlign: "center" }}>
            Budget Amount Left: ${budgetLeft}
          </Text>
        </Grid>
        {Object.keys(budgetInfo.budgetData).map((key, index) => (
          <Grid key={index}>
            <SubCategoryCard budgetInfo={budgetInfo} setBudgetInfo={setBudgetInfo} index={index} name={key} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default BudgetExpenses;
