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
} from "@nextui-org/react";

const SubCategoryInput = ({ name, budgetData }) => {
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
      <Spacer y={1.3} />
      <Row>
        <Spacer x={17} />
        <Text>Subcategory</Text>
        <Spacer x={4.5} />
        <Text>$ Amount</Text>
      </Row>
      {inputPairs.map((input, index) => (
        <Row key={index}>
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
        </Row>
      ))}
    </div>
  );
};

export default SubCategoryInput;
