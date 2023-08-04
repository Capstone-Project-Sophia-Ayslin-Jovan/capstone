import {
  Input,
  Row,
  Spacer,
  Button,
  Text,
  Container,
  Grid,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NewBudgetContext } from "../../../contexts/newBudget";

const BudgetInfo = ({ setIsDisabled }) => {
  const { newBudget, setNewBudget } = useContext(NewBudgetContext);
  useEffect(() => {
    setIsDisabled(true);
    if (
      newBudget.name !== null &&
      newBudget.goal !== null &&
      newBudget.startDate !== null &&
      newBudget.endDate !== null
    )
      setIsDisabled(false);
  }, [newBudget]);
  const handleChange = (e) => {
    setNewBudget((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  return (
    <Container display="flex" justify="center">
      <Text h2 weight="bold">
        Give your Budget a Name, Goal, and Timespan!
      </Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} md={9}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            label="Budget Name"
            placeholder="ex. Summer Spending"
            type="text"
            size="xl"
            name="name"
            onChange={handleChange}
            value={newBudget.name ? newBudget.name : ""}
            aria-label="Input"
          />
        </Grid>
        <Grid xs={12} md={9}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            type="number"
            label="Budget Goal"
            placeholder="2000"
            size="xl"
            labelLeft="$"
            name="goal"
            onChange={handleChange}
            value={newBudget.goal ? newBudget.goal : ""}
            aria-label="Input"
          />
        </Grid>
        <Grid xs={12} md={9}>
          <Input
            label="Start Date"
            fullWidth
            size="xl"
            color="primary"
            type="date"
            name="startDate"
            onChange={handleChange}
            value={newBudget.startDate ? newBudget.startDate : ""}
            aria-label="Input"
          />
        </Grid>
        <Grid xs={12} md={9}>
          <Input
            label="End Date"
            fullWidth
            size="xl"
            color="primary"
            type="date"
            name="endDate"
            onChange={handleChange}
            value={newBudget.endDate ? newBudget.endDate : ""}
            aria-label="Input"
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default BudgetInfo;
