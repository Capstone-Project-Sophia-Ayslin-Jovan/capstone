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
import Sidebar from "../../../components/Sidebar/Sidebar";

const BudgetExpenses = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  console.log(budgetInfo.budgetData);
  return (
    <div>
      <Container responsive="true">
        <Text h2>
          Lastly, how much money do you want to put towards each of your
          expenses?
        </Text>

        <Text h3>Budget Amount Left: ${budgetInfo.total}</Text>
        {budgetInfo.budgetData.map((category, index) => (
          <div key={index}>
            <SubCategoryCard category={Object.keys(category)[0]} index={index} />
          </div>
        ))}

        <Spacer y={2} />
        <Row>
          <Spacer x={15} />
          <Button onPress={handlePreviousStep}>Back</Button>
          <Spacer x={1} />
          <Button onPress={handleNextStep}>Next</Button>
        </Row>
      </Container>
    </div>
  );
};

export default BudgetExpenses;
