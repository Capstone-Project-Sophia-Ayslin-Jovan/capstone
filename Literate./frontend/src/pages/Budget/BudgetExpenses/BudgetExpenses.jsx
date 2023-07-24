"use client";
import React, { useState, useEffect } from "react";
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
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import apiClient from "../../../services/apiClient";
import Sidebar from "../../../components/Sidebar/Sidebar";

const BudgetExpenses = ({
  budgetInfo,
  setBudgetInfo,
  handleNextStep,
  handlePreviousStep,
  isOpen,
  handleToggle,
}) => {
  // useEffect(() => {
  //   const fetchBudgetInfo = async () => {
  //     try {
  //       // use api client to get info
  //       const response = await apiClient.fetchBudgetInfo()
  //       console.log(response)
  //       setBudgetInfo(response.data.budgetInfo);
  //     } catch (error) {
  //       console.error("Error fetching budget information:", error);
  //     }
  //   };
  //   fetchBudgetInfo();
  // }, [budgetInfo]);
  console.log(budgetInfo.subCategories);
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
      <Container responsive="true">
        <Text h2>
          Lastly, how much money do you want to put towards each of your
          expenses?
        </Text>

        <Text h3>Budget Amount Left: ${budgetInfo.total}</Text>
        {budgetInfo.subCategories.map((category, index) => (
          <div key={index}>
            <SubCategoryCard category={category} />
          </div>
        ))}

        <Spacer y={2} />
        <Row>
          <Spacer x={15} />
          <Button onPress={handlePreviousStep}>Back</Button>
          <Spacer x={1} />
          <Button onPress={handleNextStep}>Next</Button>
        </Row>
      </Container>
    </div>
  );
};

export default BudgetExpenses;
