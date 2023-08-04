import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Text,
  Spacer,
  Link,
  Card,
  Col,
  Collapse,
  Grid,
  Badge,
} from "@nextui-org/react";
import "./Home.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  registerables,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);
import { BudgetContext } from "../../contexts/budget";
import CategoryHome from "./CategoryHome";
import { Tag, TagLabel } from "@chakra-ui/tag";
import { useNavigate } from "react-router";
import apiClient from "../../services/apiClient";
export const Home = ({}) => {
  const navigate = useNavigate();
  const { budget } = useContext(BudgetContext);
  const [subCatArray, setSubCatArray] = useState([]);
  const [barCatArray, setbarCatArray] = useState([]);
  const [budgetStats, setBudgetStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const tempArray1 = [];
      const tempArray2 = [];
      for (let category of Object.keys(budget.budgetData)) {
        const { data } = await apiClient.getStats(budget.id, category);
        tempArray1.push(data.catStats.catTotalAllocation);
        tempArray2.push(
          (data.catStats.catTotalSpent / data.catStats.catTotalAllocation) * 100
        );
      }
      setSubCatArray(tempArray1);
      setbarCatArray(tempArray2);
    };
    fetchStats();
  }, [budget.budgetData]);

  // budget card button navigation
  const handleClick = () => {
    navigate("/Dashboard/Create-Budget");
  };
  //setting labels for dougnut chart
  const budgetLabels = budget.budgetData
    ? Object.keys(budget?.budgetData)
    : null;
  // array that stores total allocation sums
  const subCatSum = budgetLabels ? new Array(budgetLabels.length).fill(0) : [0];
  // adds to allocation sum array
  budget.budgetData
    ? Object.keys(budget?.budgetData).map((category, index) =>
        budget?.budgetData[category].map((listItem) => {
          subCatSum[index] += parseInt(listItem.allocation);
        })
      )
    : null;
  //usd formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  //date converter
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
  const donutData = {
    labels: budgetLabels,
    datasets: [
      {
        label: "$ for the month",
        data: subCatArray,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const barLabels = budget.budgetData ? Object.keys(budget?.budgetData) : null;

  const barDataSet = budget.budgetData
    ? new Array(barLabels.length).fill(0)
    : null;

  budget.budgetData
    ? Object.keys(budget.budgetData).map((category, index) => {
        budget.budgetData[category].map((subcat) => {
          barDataSet[index] += (subcat.totalSpent / subcat.allocation) * 100;
        });
      })
    : null;
  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: "% Total Spent",
        data: barCatArray,
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const totalSpentSum = budget.budgetData
    ? new Array(Object.keys(budget.budgetData).length).fill(0)
    : null;

  return (
    <>
      <Grid>
        {budget?.budgetData ? (
          <>
            <Card css={{ minHeight: "90vh", padding: 20 }}>
              <Grid.Container
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid justify="space-around">
                  <Text size={42} css={{ fontWeight: "$normal" }} h2>
                    {budget.name}
                  </Text>
                  <Badge
                    size={"xl"}
                    color={"primary"}
                    isSquared
                    variant={"bordered"}
                    css={{ fontWeight: "$normal", fontSize: "$3xl" }}
                  >
                    {formatter.format(budget.goal)}
                  </Badge>
                </Grid>
                <Grid>
                  <Tag size={"lg"} variant={"outline"}>
                    <TagLabel>
                      {formatDate(budget.startDate)} -{" "}
                      {formatDate(budget.endDate)}
                    </TagLabel>
                  </Tag>
                </Grid>
              </Grid.Container>

              <Container>
                <Row justify="center">
                  <Collapse.Group splitted>
                    {Object.keys(budget.budgetData).map((element, index) => {
                      let subCatMoney = 0;
                      budget.budgetData[element].map((subcat) => {
                        subCatMoney += subcat.allocation;
                        totalSpentSum[index] += subcat.totalSpent;
                      });
                      return (
                        <CategoryHome
                          key={index}
                          category={element}
                          categoryValues={budget.budgetData[element]}
                          allocationSum={subCatMoney}
                          totalSpentSum={totalSpentSum[index]}
                        />
                      );
                    })}
                  </Collapse.Group>
                  <Container alignContent="bottom">
                    <Col>
                      <Spacer y={0.8} />
                      <Row>
                        <Card css={{ width: "fit-content" }}>
                          <Card.Header>
                            <Text css={{ fontWeight: "$normal" }} size={18} h2>
                              {budget.name} Category Distribution
                            </Text>
                          </Card.Header>
                          <Card.Body>
                            <Doughnut
                              data={donutData}
                              height="400px"
                              width="400px"
                              options={{ maintainAspectRatio: false }}
                              id="doughnutChart"
                            />
                          </Card.Body>
                        </Card>
                        <Spacer x={1} />
                        <Card css={{ width: "fit-content" }}>
                          <Card.Body>
                            <Bar
                              data={barData}
                              height="460px"
                              width="400px"
                              options={{ maintainAspectRatio: false }}
                              id="barChart"
                            />
                          </Card.Body>
                        </Card>
                      </Row>
                    </Col>
                  </Container>
                </Row>
              </Container>
            </Card>
          </>
        ) : (
          <Row align="center">
            <Container responsive>
              <Card>
                <Card.Body>
                  <Container>
                    <Text css={{ fontWeight: "$normal" }} size={36} h2>
                      Budget beginner? No problem, we've made it simple just for
                      you!
                    </Text>
                    <Container>
                      <Row>
                        <img src="https://img.freepik.com/free-vector/sad-bankrupt-thinking-money-problems-cup-coffee-cartoon-illustration_74855-14505.jpg?w=2000&t=st=1691129828~exp=1691130428~hmac=95b9f47c40284d398a649528b345d737d844318f95b9c99097e2174aa3fc2683" />
                        <Container css={{ width: 500 }}>
                          <Text size={26} h3>
                            With our budgeting tool you'll be able to:
                          </Text>
                          <Text size={24} p>
                            1. Be more cognizant of your spending.
                          </Text>
                          <Text size={24} p>
                            2. Know where your money is going.
                          </Text>
                          <Text size={24} p>
                            3. Become a better budgeter.
                          </Text>
                          <Spacer y={2} />
                          <Button flat size={"xl"} auto onPress={handleClick}>
                            Start Budgeting
                          </Button>
                        </Container>
                      </Row>
                    </Container>
                  </Container>
                </Card.Body>
              </Card>
            </Container>
          </Row>
        )}

        <Spacer y={2} />
        <Container responsive>
          <Card>
            <Card.Body>
              <Container responsive>
                <Text css={{ fontWeight: "$normal" }} size={36} h2>
                  Brush up on your financial knowledge and check out our quick
                  lessons on money management and spending!
                </Text>
                <Spacer y={2} />
                <Container responsive>
                  <Row>
                    <Col>
                      <Text css={{ fontWeight: "$normal" }} size={26} h2>
                        Our learning platform offers quick and thorough modules
                        to give you the knowledge you need to be successful.
                        Track your progress, and celebrate milestones along the
                        way.
                      </Text>
                      <Spacer y={2} />
                      <Link href="/Dashboard/Modules">
                        <Button flat color={"success"} auto size={"xl"}>
                          Learn Now
                        </Button>
                      </Link>
                    </Col>
                    <img src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=2000&t=st=1690904398~exp=1690904998~hmac=9f3071f8f17a50a1e57f35bc396df4c2e7449be07b93577e38159d6333feed0d" />
                  </Row>
                </Container>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </Grid>
      <Spacer y={4} />
    </>
  );
};
