import React, { useEffect, useState, useContext } from "react";
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
  Grid,
} from "@nextui-org/react";
import { NewBudgetContext } from "../../../contexts/newBudget";

const BudgetCategory = ({ setIsDisabled }) => {
  // Access the new budget context
  const { newBudget, setNewBudget } = useContext(NewBudgetContext);

  // Effect to determine if any categories are selected
  useEffect(() => {
    setIsDisabled(true);
    // Check if there are selected categories in the budgetData
    if (Object.keys(newBudget.budgetData).length >= 1) setIsDisabled(false);
  }, [newBudget]);

  // Handle checkbox changes
  const handleOnChange = (categories) => {
    let catObj = {};
    for (let category of categories) {
      // Check if category is present in budgetData
      const isPresent = Object.keys(newBudget.budgetData).includes(category);
      if (!isPresent) catObj[category] = [];
      else catObj[category] = newBudget.budgetData[category];
    }
    // Update the newBudget context with selected categories
    setNewBudget((info) => ({ ...info, budgetData: catObj }));
  };

  return (
    <Container>
      {/* Heading */}
      <Container display="flex" justify="center">
        <Text h2 weight="bold">
          Choose What Categories to Budget
        </Text>
      </Container>
      <Spacer y={1} />

      {/* Checkbox group for selecting categories */}
      <Checkbox.Group
        color="primary"
        label="Select Categories"
        value={Object.keys(newBudget.budgetData)}
        onChange={handleOnChange}
      >
        <Checkbox value="Essentials">Essentials</Checkbox>
        <Checkbox value="Housing,Utilities,&Bills">
          Housing, Utilities, & Bills
        </Checkbox>
        <Checkbox value="Transportation">Transportation</Checkbox>
        <Checkbox value="Subscriptions&Memberships">
          Subscriptions & Memberships
        </Checkbox>
        <Checkbox value="Health&Insurance">Health & Insurance</Checkbox>
        <Checkbox value="Recreation">Recreation</Checkbox>
        <Checkbox value="Other">Other</Checkbox>
      </Checkbox.Group>
    </Container>
  );
};

export default BudgetCategory;
