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
      <Spacer y={1.3} />
      <Row>
        <Spacer x={17}/>
        <Text>Subcategory</Text>
        <Spacer x={4.5}/>
        <Text>$ Amount</Text>
      </Row>
        <Row>
          <Spacer y={3} />
          <Spacer x={13}/>
          <Input
            type="text"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
          />
          <Spacer x={1} />
          <Input
            type="number"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
            labelLeft="$"
          />
        </Row>
        <Row>
          <Spacer y={3} />
          <Spacer x={13}/>
          <Input
            type="text"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
          />
          <Spacer x={1} />
          <Input
            type="number"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
            labelLeft="$"
          />
        </Row>
        <Row>
          <Spacer y={3} />
          <Spacer x={13}/>
          <Input
            type="text"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
          />
          <Spacer x={1} />
          <Input
            type="number"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
            labelLeft="$"
          />
        </Row>
        <Row>
          <Spacer y={3} />
          <Spacer x={13}/>
          <Input
            type="text"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
          />
          <Spacer x={1} />
          <Input
            type="number"
            onChange={(e) => handleInputChange(index, e.target.value)}
            clearable
            bordered
            color="primary"
            size="md"
            labelLeft="$"
          />
        </Row>
        
    </div>
  );
};

export default SubCategoryInput;
