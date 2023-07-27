import { Input, Row, Spacer, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useContext } from "react";
import { BudgetContext } from "../../../contexts/budget";

const NameAndDate = ({ handlePreviousStep, handleNextStep }) => {
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);

  const handleChange = (e) => {
    setBudgetInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <h2>
        What would you like to name your budget, and how long are you budgeting
        for?
      </h2>
      <Input
        clearable
        bordered
        width="500px"
        color="primary"
        label="Budget Name"
        placeholder="ex. Summer Spending"
        type="text"
        size="xl"
        name="name"
        onChange={handleChange}
        value={budgetInfo.name}
        aria-label="Input"
      />
      <Spacer y={2} />
      <Input
        label="Start Date"
        width="500px"
        type="date"
        name="startDate"
        onChange={handleChange}
        aria-label="Input"
      />
      <Spacer y={1} />
      <Input
        label="End Date"
        width="500px"
        type="date"
        name="endDate"
        onChange={handleChange}
        aria-label="Input"
      />
      <Row>
        <Spacer x={4} />
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default NameAndDate;
