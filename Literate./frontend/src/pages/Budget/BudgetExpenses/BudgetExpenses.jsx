"use client";
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
  Container,
} from "@nextui-org/react";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";

const BudgetExpenses = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [inputCount, setInputCount] = useState(1);
  const [inputs, setInputs] = useState([]);

  const addInput = () => {
    setInputCount(inputCount + 1);
    setInputs([...inputs, inputCount]);
  };

  return (
    <div>
      <Text h2>
        Lastly, how much money do you want to put towards each of your expenses?
      </Text>

      <Text h3>Budget Amount Left: $</Text>
      <Row>
        <Spacer x={20} />
        <SubCategoryInput />
      </Row>
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
