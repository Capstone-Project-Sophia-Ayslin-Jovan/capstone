"use client";
import React from "react";
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
} from "@nextui-org/react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SubCategoryResults from "../SubCategoryResults/SubCategoryResults";

const BudgetResults = ({
  budgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div>
      <Text h1>Your Budget: $ {budgetInfo.budgetGoal}</Text>

      <Container>
        {(budgetInfo.budgetCategories).map((index) => (
          <div key={index}>
            <SubCategoryResults category={category}/>   
          </div>
        ))}
      </Container>

      <Row>
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Finish</Button>
      </Row>
    </div>
  );
};

export default BudgetResults;
