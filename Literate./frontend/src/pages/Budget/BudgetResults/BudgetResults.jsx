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

const BudgetResults = ({ handleNextStep, handlePreviousStep }) => {
  return (
    <div>
        <Text>
            Results
        </Text>
      <Row>
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetResults;
