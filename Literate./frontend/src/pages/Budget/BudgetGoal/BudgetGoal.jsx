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
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

const BudgetGoal = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  const handleOnChange = (e) => {
    setBudgetInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <Text h1>What is your budgeting goal for this time?</Text>
      <Spacer y={2} />
      <Input
        clearable
        bordered
        width="500px"
        color="primary"
        type="number"
        size="xl"
        labelLeft="$"
        name="total"
        onChange={handleOnChange}
        value={budgetInfo.total}
        aria-label="Input"
      />
    </div>
  );
};

export default BudgetGoal;
