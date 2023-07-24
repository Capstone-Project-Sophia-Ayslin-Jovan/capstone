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

const BudgetResults = ({
  budgetInfo,
  handleNextStep,
  handlePreviousStep,
  isOpen,
  handleToggle,
}) => {
  return (
    <div>
      <Button light className="menu-toggle-btn" onPress={() => handleToggle()}>
        <img
          className="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
      </Button>
      <Container>
        <Sidebar isOpen={isOpen} />
        {/* </div> */}
        <Spacer y={6} />
      </Container>
      <Text h1>Your Budget: $ {budgetInfo.budgetGoal}</Text>

      <Container>
        {Object.keys(budgetInfo.budgetCategories).map((category, index) => (
          <div key={index}></div>
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
