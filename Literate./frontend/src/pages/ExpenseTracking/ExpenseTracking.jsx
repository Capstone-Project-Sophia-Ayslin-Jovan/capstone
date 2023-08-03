import React from "react";
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
  Table,
  Tooltip,
  Badge,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./ExpenseTracking.css";
import ExpenseTab from "./ExpenseTab";
import { BudgetContext } from "../../contexts/budget";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const ExpenseTracking = ({}) => {
  const { budget, setBudget } = useContext(BudgetContext);

  console.log(budget);

  return (
    <Card css={{ minHeight: "90vh" }}>
      <Grid.Container gap={2}>
        <Grid>
          <Text h2>Expenses</Text>
        </Grid>
        <Grid.Container gap={2}>
          <StatsBanner />
        </Grid.Container>
      </Grid.Container>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          {budget?.budgetData
            ? Object.keys(budget?.budgetData).map((category, index) => (
                <Tab key={index}>{category}</Tab>
              ))
            : null}
        </TabList>
        <TabPanels>
          {budget?.budgetData
            ? Object.keys(budget?.budgetData).map((category, index) => (
                <TabPanel key={index}>
                  <ExpenseTab
                    category={category}
                    categoryValues={budget?.budgetData[category]}
                  />
                </TabPanel>
              ))
            : null}
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default ExpenseTracking;

function StatsBanner() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Stat>
              <StatLabel>
                Total Expenses{" "}
                <Badge isSquared color="primary" variant="flat">
                  <Tooltip content={"Developers love Next.js"}>Primary</Tooltip>
                </Badge>
              </StatLabel>
              <StatNumber>$0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
              <Progress squared color="primary" value={50} max={250} />
            </Stat>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Stat>
              <StatLabel>
                Total Expenses
                <Badge isSquared color="warning" variant="flat">
                  <Tooltip content={"Developers love Next.js"}>Primary</Tooltip>
                </Badge>
              </StatLabel>
              <StatNumber>$0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <Progress squared color="primary" value={200} max={250} />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Stat>
              <StatLabel>
                Total Expenses
                <Badge isSquared color="secondary" variant="flat">
                  <Tooltip content={"Developers love Next.js"}>Primary</Tooltip>
                </Badge>
              </StatLabel>
              <StatNumber>$0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
