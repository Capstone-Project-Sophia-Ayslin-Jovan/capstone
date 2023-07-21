import React, { useState } from "react";
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
import { Link, Route } from "react-router-dom";

const BudgetCategory = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  const handleOnChange = (e) => {
    const catObj = {};
    for (let value of e) {
      catObj[value] = {};
    }
    setBudgetInfo((info) => ({ ...info, budgetCategories: catObj }));
  };
  console.log(budgetInfo);
  return (
    <div>
      <Text h1>What will you be budgeting?</Text>
      <Spacer y={5} />
      <Text h3>What will you be budgeting?</Text>

      <Checkbox.Group
        color="default"
        label="Check all that apply"
        value={Object.keys(budgetInfo.budgetCategories)}
        onChange={handleOnChange}
      >
        <Checkbox value="Essentials">Essentials</Checkbox>
        <Checkbox value="Bills">Housing, Utilities, & Bills</Checkbox>
        <Checkbox value="Transportation">Transportation</Checkbox>
        <Checkbox value="Subscriptions">Subscriptions & Memberships</Checkbox>
        <Checkbox value="Health">Health & Insurance</Checkbox>
        <Checkbox value="Recreation">Recreation</Checkbox>
        <Checkbox value="Other">Other</Checkbox>
      </Checkbox.Group>
      <Spacer y={5} />
      <Row>
        <Spacer x={4} />
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetCategory;
