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

const BudgetLanding = ({}) => {
  return (
    <Container>
      <Text size={30}>
        Budgeting is the process of creating a financial plan to allocate and
        manage your income, expenses, and savings. It involves estimating your
        income sources and setting limits on how much you will spend on various
        categories of expenses, such as housing, transportation, food,
        entertainment, and savings.
      </Text>
    </Container>
  );
};

export default BudgetLanding;
