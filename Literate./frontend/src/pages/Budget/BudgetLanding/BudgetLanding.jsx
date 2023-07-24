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
  Container,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

const BudgetLanding = ({
  handleNextStep,
  handlePreviousStep,
  isOpen,
  handleToggle,
}) => {
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
      <Text h3 className="description">
        Budgeting is the process of creating a financial plan to allocate and
        manage your income, expenses, and savings. It involves estimating your
        income sources and setting limits on how much you will spend on various
        categories of expenses, such as housing, transportation, food,
        entertainment, and savings.
      </Text>
      <Spacer y={4} />
      <Button className="start-btn" size="xl" onPress={handleNextStep}>
        Start Budgeting
      </Button>
    </div>
  );
};

export default BudgetLanding;
