import React, { useEffect } from "react";
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
  Divider,
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
  Box,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import apiClient from "../../services/apiClient";

const ExpenseTracking = ({}) => {
  // Context and state
  const { budget, setBudget } = useContext(BudgetContext);
  const [catChosen, setCatChosen] = useState("");
  const [budgetStats, setBudgetStats] = useState({});

  // Set the initially chosen category when budget data loads
  useEffect(() => {
    if (budget.budgetData && catChosen === "")
      setCatChosen(Object.keys(budget.budgetData)[0]);
  }, [budget.budgetData]);

  // Fetch budget statistics when category changes or budget data loads
  useEffect(() => {
    const fetchStats = async () => {
      if (catChosen !== "") {
        const { data } = await apiClient.getStats(budget.id, catChosen);
        setBudgetStats(data);
      }
    };
    fetchStats();
  }, [catChosen, budget.budgetData]);

  // Handle tab click to change the chosen category
  const handleTabClick = (e) => {
    setCatChosen(e.target.name);
  };

  // Render budget content or a message if no budget data
  return budget.budgetData ? (
    <Card css={{ minHeight: "90vh" }}>
      {/* Header */}
      <Grid.Container gap={2}>
        <Grid>
          <Text h2>Expenses</Text>
        </Grid>
        <Grid.Container>
          {/* Statistics banner */}
          <StatsBanner catChosen={catChosen} budgetStats={budgetStats} />
        </Grid.Container>
      </Grid.Container>
      {/* Tabs for categories */}
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          {budget?.budgetData
            ? Object.keys(budget?.budgetData).map((category, index) => (
                <Tab key={index} name={category} onClick={handleTabClick}>
                  {category}
                </Tab>
              ))
            : null}
        </TabList>
        <TabPanels>
          {/* Display expense tabs for each category */}
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
  ) : (
    // Display a message if no budget data
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      backgroundColor="white"
      maxWidth={800}
      p={6}
      m="10px auto"
      as="form"
      position="relative"
    >
      <Container>
        <Text css={{ fontWeight: "$normal", textAlign: "center" }} size={36} h1>
          Looks like you haven't created a budget yet!
        </Text>
        <Divider></Divider>
        <Text css={{ fontWeight: "$normal", textAlign: "center" }} size={36} h1>
          To create a new budget, check out the "Create a Budget" tab in the
          sidebar!
        </Text>
      </Container>
    </Box>
  );
};

// Define a component to display budget statistics
function StatsBanner({ catChosen, budgetStats }) {
  const { budget, setBudget } = useContext(BudgetContext);

  // Format a date string into a human-readable format
  function formatDate(inputDate) {
    // ... (existing code)
  }

  // Currency formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Grid.Container gap={2} justify="center">
      {/* Display statistics for total remaining, total spent, and total budget remaining */}
    </Grid.Container>
  );
}

export default ExpenseTracking;
