import React, { useEffect, useState } from "react";
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
import { Link, Route } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

const BudgetCategory = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [categories, setCategories] = useState(
    Object.keys(budgetInfo.budgetData)
  );

  const handleOnChange = (values) => {
    console.log(categories);
    setCategories(values);
  };
  const handleBudgetCatSubmit = () => {
    let catObj = {};
    for (let category of categories) {
      const isPresent = Object.keys(budgetInfo.budgetData).includes(category);
      if (!isPresent) catObj[category] = [];
      else catObj[category] = budgetInfo.budgetData[category];
    }
    setBudgetInfo((info) => ({ ...info, budgetData: catObj }));
    handleNextStep();
  };

  return (
    <div>
      <Text h1>What will you be budgeting?</Text>
      <Spacer y={5} />

      <Checkbox.Group
        color="secondary"
        label="Check all that apply"
        value={categories}
        onChange={handleOnChange}
      >
        <Checkbox value="Essentials">Essentials</Checkbox>
        <Checkbox value="Housing, Utilities, & Bills">
          Housing, Utilities, & Bills
        </Checkbox>
        <Checkbox value="Transportation">Transportation</Checkbox>
        <Checkbox value="Subscriptions & Memberships">
          Subscriptions & Memberships
        </Checkbox>
        <Checkbox value="Health & Insurance">Health & Insurance</Checkbox>
        <Checkbox value="Recreation">Recreation</Checkbox>
        <Checkbox value="Other">Other</Checkbox>
      </Checkbox.Group>
      <Spacer y={5} />
      <Row>
        <Spacer x={4} />
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleBudgetCatSubmit}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetCategory;
