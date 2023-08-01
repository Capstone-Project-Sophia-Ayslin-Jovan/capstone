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

const BudgetInfo = ({ budgetInfo, setBudgetInfo, setIsDisabled }) => {
  useEffect(() => {
    setIsDisabled(true);
    if (
      budgetInfo.name !== null &&
      budgetInfo.goal !== null &&
      budgetInfo.startDate !== null &&
      budgetInfo.endDate !== null
    )
      setIsDisabled(false);
  }, [budgetInfo]);

  const handleChange = (e) => {
    setBudgetInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
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
            value={budgetInfo.name ? budgetInfo.name : ""}
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
            value={budgetInfo.goal ? budgetInfo.goal : ""}
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
            value={budgetInfo.startDate ? budgetInfo.startDate : ""}
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
            value={budgetInfo.endDate ? budgetInfo.endDate : ""}
            aria-label="Input"
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default BudgetInfo;
