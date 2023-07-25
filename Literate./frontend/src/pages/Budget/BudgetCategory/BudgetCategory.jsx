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
  isOpen,
  handleToggle,
}) => {
  const [categories, setCategories] = useState([]);

  const handleOnChange = (values) => {
    setCategories(values);
  };

  return (
    <div>
      <Button light className="menu-toggle-btn" onPress={() => handleToggle()}>
        <img
          className="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
      </Button>
      <Container>
        <Sidebar isOpen={isOpen} />
        {/* </div> */}
        <Spacer y={6} />
      </Container>
      <Text h1>What will you be budgeting?</Text>
      <Spacer y={5} />
      <Text h3>What will you be budgeting?</Text>

      <Checkbox.Group
        color="default"
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
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetCategory;
