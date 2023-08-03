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

const BudgetCategory = ({ budgetInfo, setBudgetInfo, setIsDisabled }) => {
  useEffect(() => {
    setIsDisabled(true);
    if (Object.keys(budgetInfo.budgetData).length >= 1) setIsDisabled(false);
  }, [budgetInfo]);
  const handleOnChange = (categories) => {
    let catObj = {};
    for (let category of categories) {
      const isPresent = Object.keys(budgetInfo.budgetData).includes(category);
      if (!isPresent) catObj[category] = [];
      else catObj[category] = budgetInfo.budgetData[category];
    }
    setBudgetInfo((info) => ({ ...info, budgetData: catObj }));
  };

  return (
    <Container>
      <Container display="flex" justify="center">
        <Text h2 weight="bold">
          Choose What Categories to Budget
        </Text>
      </Container>
      <Spacer y={1} />
      <Checkbox.Group
        color="primary"
        label="Select Categories"
        value={Object.keys(budgetInfo.budgetData)}
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
