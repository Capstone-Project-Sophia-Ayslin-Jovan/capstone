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
        {/* Loop through each budget category */}
        {Object.keys(budgetInfo.budgetData).map((key, index) => (
          <Link to={`/${key}`} key={index}>
            {/* Display a link to the budget category */}
            <Card isHoverable="true">
              {/* Render CurrentSubCatBudget component with category details */}
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
