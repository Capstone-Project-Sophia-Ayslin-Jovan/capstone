"use client";
import React, { useState, useEffect } from "react";
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
import apiClient from "../../../services/apiClient";

const BudgetExpenses = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  // useEffect(() => {
  //   const fetchBudgetInfo = async () => {
  //     try {
  //       // use api client to get info
  //       const response = await apiClient.fetchBudgetInfo()
  //       console.log(response)
  //       setBudgetInfo(response.data.budgetInfo);
  //     } catch (error) {
  //       console.error("Error fetching budget information:", error);
  //     }
  //   };
  //   fetchBudgetInfo();
  // }, [budgetInfo]);
  console.log(budgetInfo)
  return (
    <div>
      <Text h2>
        Lastly, how much money do you want to put towards each of your expenses?
      </Text>

      <Text h3>Budget Amount Left: ${budgetInfo.budgetGoal}</Text>
      <Container>
        {Object.keys(budgetInfo.budgetCategories).map((category, index) => (
          <div key={index}>
            <SubCategoryCard category={category} />
          </div>
        ))}
      </Container>

      <Spacer y={2} />
      <Row>
        <Spacer x={15} />
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetExpenses;
