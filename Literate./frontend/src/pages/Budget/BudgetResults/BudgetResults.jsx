"use client";
import React, { useContext } from "react";
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
import Sidebar from "../../../components/Sidebar/Sidebar";
import SubCategoryResults from "../SubCategoryResults/SubCategoryResults";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthorizeContext } from "../../../contexts/authUser";
import { BudgetContext } from "../../../contexts/budget";
import apiClient from "../../../services/apiClient";

const BudgetResults = ({ budgetInfo, handlePreviousStep }) => {
  const navigate = useNavigate();
  const { setAuthState, setInitialized } = useContext(AuthorizeContext);
  const { setBudgetInfo } = useContext(BudgetContext);
  for (let key in budgetInfo.budgetData) {
    budgetInfo.budgetData[key] = budgetInfo.budgetData[key].filter(
      (obj) => obj.name !== "" && obj.allocation !== 0
    );
  }

  const handleSubmitResults = async () => {
    await apiClient.createBudget(budgetInfo);
    setInitialized(false);
    navigate("/Home");
  };

  return (
    <div>
      <Text h1>Your Budget: $ {budgetInfo.budgetGoal}</Text>

      <Container>
        {Object.keys(budgetInfo.budgetData).map((key, index) => (
          <div key={index}>
            <SubCategoryResults
              category={key}
              categoryValues={budgetInfo.budgetData[key]}
            />
          </div>
        ))}
      </Container>

      <Row>
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleSubmitResults}>Finish</Button>
      </Row>
    </div>
  );
};

export default BudgetResults;
