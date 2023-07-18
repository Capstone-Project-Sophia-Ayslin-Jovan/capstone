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

const SubCategoryInput = () => {
  const [inputs, setInputs] = useState([]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  return (
    <div>
      <Button onClick={addInput}>Add Subcategories +</Button>
      <Spacer y={1.3} />
      {inputs.map((input, index) => (
        <Row>
          <Spacer y={3} />
          <Spacer x={-1} />
          <Input
            key={index}
            type="text"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
          />
          <Spacer x={1} />
          <Text h3> $ </Text>
          <Input
            key={index}
            type="number"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
          />
        </Row>
      ))}
    </div>
  );
};

export default SubCategoryInput;
