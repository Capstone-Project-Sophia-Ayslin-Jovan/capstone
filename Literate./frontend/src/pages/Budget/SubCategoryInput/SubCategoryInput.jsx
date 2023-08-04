"use client";
import React, { useState, useContext, useEffect } from "react";
import {
  Spacer,
  Text,
  Input,
  Row,
  Container,
  Grid,
  Button,
} from "@nextui-org/react";

import { PlusIcon } from "../../../components/PlusIcon/PlusIcon";
import { NewBudgetContext } from "../../../contexts/newBudget";

const SubCategoryInput = ({ name }) => {
  const { newBudget, setNewBudget } = useContext(NewBudgetContext);
  const [inputPairs, setInputPairs] = useState(newBudget.budgetData[name]);

  const handleOnClick = () => {
    setInputPairs((state) => [
      ...state,
      {
        name: null,
        allocation: null,
      },
    ]);
  };

  if (inputPairs.length === 0) handleOnClick();

  const handleInputChange = (e, index, key) => {
    const { value } = e.target;
    const updatedInput = [...inputPairs];
    updatedInput[index][key] = value;
    setInputPairs(updatedInput);
    const updatedBudgetInfo = { ...newBudget };
    updatedBudgetInfo.budgetData[name] = inputPairs;
    setNewBudget(updatedBudgetInfo);
  };
  return (
    <Grid.Container gap={1} justify="center">
      <Grid md={4.1} css={{ justifyContent: "center" }}>
        <Text color="primary">Subcategory</Text>
      </Grid>
      <Grid md={4.1} css={{ justifyContent: "center" }}>
        <Text color="primary">$ Amount</Text>
      </Grid>
      {inputPairs.map((input, index) => (
        <React.Fragment key={index}>
          <Grid md={4.1}>
            <Input
              type="text"
              onChange={(e) => handleInputChange(e, index, "name")}
              clearable
              bordered
              fullWidth
              name="name"
              placeholder={index === 0 ? "Ex. Groceries" : ""}
              value={input.name ? input.name : ""}
              color="primary"
              size="md"
              aria-label="Input"
            />
          </Grid>
          <Grid md={4.1}>
            <Input
              type="number"
              onChange={(e) => handleInputChange(e, index, "allocation")}
              clearable
              bordered
              fullWidth
              name="allocation"
              placeholder={index === 0 ? "200" : ""}
              value={input.allocation ? input.allocation : ""}
              color="primary"
              size="md"
              labelLeft="$"
              aria-label="Input"
            />
          </Grid>
        </React.Fragment>
      ))}
      <Grid md={8} css={{ justifyContent: "center" }}>
        <Button
          iconRight={<PlusIcon fill="currentColor" />}
          color="primary"
          onPress={handleOnClick}
        >
          Add Entry
        </Button>
      </Grid>
    </Grid.Container>
  );
};
export default SubCategoryInput;