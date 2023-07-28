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

const BudgetExpenses = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div>
      <Container responsive="true">
        <Text h2>
          Lastly, how much money do you want to put towards each of your
          expenses?
        </Text>

        <Text h3>Budget Amount Left: ${budgetInfo.total}</Text>
        {Object.keys(budgetInfo.budgetData).map((key, index) => (
          <div key={index}>
            <SubCategoryCard
              index={index}
              name={key}
              budgetData={budgetInfo.budgetData}
            />
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
