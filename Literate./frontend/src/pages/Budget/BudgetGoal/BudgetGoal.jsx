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
} from "@nextui-org/react";

const BudgetGoal = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <div>
      <Text h1>What is your budgeting goal?</Text>
      <Spacer y={2} />
      <Input
        clearable
        bordered
        width="500px"
        color="primary"
        type="number"
        size="xl"
        placeholder="$"
        name="budget"
        label="Desired monthly spending"
      />
      <Spacer y={2} />
      <Row>
        <Spacer x={4} />
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetGoal;
