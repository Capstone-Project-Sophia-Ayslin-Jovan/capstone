import React from "react";
import { BudgetContext } from "../../contexts/budget";
import {
  Grid,
  Card,
  Progress,
  Text,
  Container,
  Spacer,
  Collapse,
  Modal,
  Button,
  Input,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./ExpenseTracking.css";
import ExpenseCard from "./ExpenseCard";
import { Pie } from "react-chartjs-2";
const ExpenseTracking = ({}) => {
  //   const [visible, setVisible] = useState(false);
  //   const openHandler = () => {
  //     setVisible(true);
  //   };
  //   const closeHandler = () => {
  //     setVisible(false);
  //   };
  const { budget, setBudget } = useContext(BudgetContext);
  console.log("BUDGET", budget?.budgetData);
  return (
    <div>
      <Text h1>
        {budget?.name} : ${budget?.goal}
      </Text>

      <Grid.Container gap={2}>
        <Grid xs={4}>
          <Collapse.Group splitted>
            {budget.budgetData
              ? Object.keys(budget?.budgetData).map((category, index) => (
                  <div key={index}>
                    <ExpenseCard
                      category={Object.keys(budget?.budgetData[category])}
                      categoryValues={budget?.budgetData[category]}
                    />
                  </div>
                ))
              : null}
          </Collapse.Group>
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
    </div>
  );
};

export default ExpenseTracking;
