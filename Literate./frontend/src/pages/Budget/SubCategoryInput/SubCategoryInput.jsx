"use client";
import React, { useState } from "react";
import { Spacer, Text, Input, Row, Container } from "@nextui-org/react";
const SubCategoryInput = ({ name, budgetData }) => {
  console.log("BudgetName:", name);
  const [inputPairs, setInputPairs] = useState(budgetData[name]);
  for (let x = inputPairs.length; x < 5; x++) {
    inputPairs.push({ name: "", allocation: 0 });
  }
  const handleInputChange = (e, index, key) => {
    const { value } = e.target;
    const updatedInput = [...inputPairs];
    updatedInput[index][key] = value;
    setInputPairs(updatedInput);
    budgetData[name] = inputPairs;
  };
  return (
    <div>
      <Spacer y={1} />
      <Row>
        <Spacer x={17} />
        <Text>Subcategory</Text>
        <Spacer x={4.5} />
        <Text>$ Amount</Text>
      </Row>
      {/* <Container justify="center" alignContent="center"> */}
      {inputPairs.map((input, index) => (
        <Row key={index}>
          <Spacer x={15} />
          <Input
            type="text"
            onChange={(e) => handleInputChange(e, index, "name")}
            clearable
            bordered
            name="name"
            value={input.name}
            color="primary"
            size="md"
            aria-label="Input"
          />
          <Spacer x={1} />
          <Input
            type="number"
            onChange={(e) => handleInputChange(e, index, "allocation")}
            clearable
            bordered
            name="allocation"
            value={input.allocation}
            color="primary"
            size="md"
            labelLeft="$"
            aria-label="Input"
          />
          <Spacer y={3} />
        </Row>
      ))}
      {/* </Container> */}
    </div>
  );
};
export default SubCategoryInput;