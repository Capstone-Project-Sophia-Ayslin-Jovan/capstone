"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  Button,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Card,
  Container,
} from "@nextui-org/react";
import CurrentSubCatBudget from "./CurrentSubCatBudget/CurrentSubCatBudget";
import { BudgetContext } from "../../../contexts/budget";
import { useContext } from "react";
import apiClient from "../../../services/apiClient";
import { AuthorizeContext } from "../../../contexts/authUser";
import { Link } from "react-router-dom";

const CurrentBudget = () => {
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);
  const { authState } = useContext(AuthorizeContext);

  return (
    <div>
      <Container>
        {console.log("budgetInfo:", budgetInfo)}
        {Object.keys(budgetInfo.budgetData).map((key, index) => (
          <Link to={`/${key}`}>
            <Card key={index} isHoverable="true">
              <CurrentSubCatBudget
                index={index}
                name={key}
                budgetData={budgetInfo.budgetData}
                categoryValues={budgetInfo.budgetData[key]}
              />
            </Card>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default CurrentBudget;
