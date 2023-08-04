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
import { NewBudgetContext } from "../../../contexts/newBudget";

const BudgetExpenses = ({ budgetLeft, setBudgetLeft, setIsDisabled }) => {
  const { newBudget } = useContext(NewBudgetContext);

  useEffect(() => {
    setIsDisabled(true);
    const filteredEmpty = Object.keys(newBudget.budgetData).filter((value) => {
      if (newBudget.budgetData[value].length === 0) return true;
      if (
        newBudget.budgetData[value][0].name === null ||
        newBudget.budgetData[value][0].name === "" ||
        newBudget.budgetData[value][0].allocation === null ||
        newBudget.budgetData[value][0].allocation === ""
      )
        return true;
    });
    if (filteredEmpty.length === 0) {
      setIsDisabled(false);
    }
    let totalExpenses = 0;
    for (let category in newBudget.budgetData) {
      for (let subCategory of newBudget.budgetData[category]) {
        if (subCategory.allocation !== null && subCategory.allocation !== "")
          totalExpenses += parseInt(subCategory.allocation);
      }
    }
    setBudgetLeft(parseInt(newBudget.goal) - totalExpenses);
  }, [newBudget]);
  return (
    <Container>
      <Grid.Container justify="center" gap={2}>
        <Grid>
          <Text h2 weight="bold">
            Distribute Funds To Subcategories
          </Text>
          <Text
            h3
            color={budgetLeft < 0 ? "red" : "black"}
            css={{ textAlign: "center" }}
          >
            Budget Amount Left: ${budgetLeft}
          </Text>
        </Grid>
        {Object.keys(newBudget.budgetData).map((key, index) => (
          <Grid key={index}>
            <SubCategoryCard index={index} name={key} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default BudgetExpenses;
