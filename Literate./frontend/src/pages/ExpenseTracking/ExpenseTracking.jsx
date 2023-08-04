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
import apiClient from "../../services/apiClient";

const ExpenseTracking = ({}) => {
  const { budget, setBudget } = useContext(BudgetContext);
  const [catChosen, setCatChosen] = useState("");
  const [budgetStats, setBudgetStats] = useState({});

  useEffect(() => {
    if (budget.budgetData && catChosen === "")
      setCatChosen(Object.keys(budget.budgetData)[0]);
  }, [budget.budgetData]);

  useEffect(() => {
    const fetchStats = async () => {
      if (catChosen !== "") {
        const { data } = await apiClient.getStats(budget.id, catChosen);
        setBudgetStats(data);
      }
    };
    fetchStats();
  }, [catChosen, budget.budgetData]);

  const handleTabClick = (e) => {
    setCatChosen(e.target.name);
  };

  return (
    <Card css={{ minHeight: "90vh" }}>
      <Grid.Container gap={2}>
        <Grid>
          <Text h2>Expenses</Text>
        </Grid>
        <Grid.Container>
          <StatsBanner catChosen={catChosen} budgetStats={budgetStats} />
        </Grid.Container>
      </Grid.Container>
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
// Total Remaining of Budget
// Total Spent of Budget
// Total Spent of Category

export default ExpenseTracking;

function StatsBanner({ catChosen, budgetStats }) {
  const { budget, setBudget } = useContext(BudgetContext);
  function formatDate(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const parts = inputDate.split("-");
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    return `${months[monthIndex]} ${day}`;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Stat>
              <Grid.Container
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid>
                  <StatLabel fontSize={25}>Total Remaining</StatLabel>
                </Grid>
                <Grid>
                  <Badge isSquared color="primary" variant="flat">
                    {catChosen}
                  </Badge>
                </Grid>
              </Grid.Container>
              <StatNumber
                color={
                  budgetStats.catStats &&
                  budgetStats.catStats.catTotalRemaining < 0
                    ? "red"
                    : "green"
                }
              >
                {budgetStats.catStats
                  ? formatter.format(budgetStats.catStats.catTotalRemaining)
                  : 0}
              </StatNumber>
              <StatHelpText>
                {budget.startDate ? formatDate(budget.startDate) : ""} -{" "}
                {budget.startDate ? formatDate(budget.endDate) : ""}
              </StatHelpText>
            </Stat>
            <Progress
              squared
              color="primary"
              value={
                budgetStats.catStats
                  ? budgetStats.catStats.catTotalRemaining
                  : 100
              }
              max={
                budgetStats.catStats
                  ? budgetStats.catStats.catTotalAllocation
                  : 100
              }
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Stat>
              <Grid.Container
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid>
                  <StatLabel fontSize={25}>Total Spent</StatLabel>
                </Grid>
                <Grid>
                  <Badge isSquared color="warning" variant="flat">
                    {budget.name ? budget.name : ""}
                  </Badge>
                </Grid>
              </Grid.Container>
              <StatNumber color="#555555">
                {budgetStats.budgetStats
                  ? formatter.format(budgetStats.budgetStats.budgetTotalSpent)
                  : 0}
              </StatNumber>
              <StatHelpText>
                {budget.startDate ? formatDate(budget.startDate) : ""} -{" "}
                {budget.startDate ? formatDate(budget.endDate) : ""}
              </StatHelpText>
            </Stat>
            <Progress
              squared
              color="primary"
              value={
                budgetStats.budgetStats
                  ? budgetStats.budgetStats.budgetTotalSpent
                  : 0
              }
              max={
                budgetStats.budgetStats
                  ? budgetStats.budgetStats.budgetTotalAllocation
                  : 0
              }
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card variant="bordered">
          <Card.Body>
            <Stat>
              <Grid.Container
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid>
                  <StatLabel fontSize={25}>Total Budget Remaining</StatLabel>
                </Grid>
                <Grid>
                  <Badge isSquared color="secondary" variant="flat">
                    {budget.name ? budget.name : ""}
                  </Badge>
                </Grid>
              </Grid.Container>
              <StatNumber
                color={
                  budget.goal &&
                  budgetStats.budgetTotalSpent &&
                  budget.goal - budgetStats.budgetStats.budgetTotalSpent < 0
                    ? "red"
                    : "green"
                }
              >
                {budgetStats.budgetStats && budget.goal
                  ? formatter.format(
                      budget.goal - budgetStats.budgetStats.budgetTotalSpent
                    )
                  : 0}
              </StatNumber>
              <StatHelpText>
                {budget.startDate ? formatDate(budget.startDate) : ""} -{" "}
                {budget.startDate ? formatDate(budget.endDate) : ""}
              </StatHelpText>
            </Stat>
            <Progress
              squared
              color="primary"
              value={
                budgetStats.budgetStats && budget.goal
                  ? budget.goal - budgetStats.budgetStats.budgetTotalSpent
                  : 0
              }
              max={budget.goal ? budget.goal : 0}
            />
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
