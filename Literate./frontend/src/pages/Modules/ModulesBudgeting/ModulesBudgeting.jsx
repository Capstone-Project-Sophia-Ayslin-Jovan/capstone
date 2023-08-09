import React from "react";
import {
  Box,
  List,
  ListItem,
  UnorderedList,
  Button as ChakraButton,
  Input as ChakraInput,
} from "@chakra-ui/react";
import {
  Navbar,
  Button,
  Spacer,
  Grid,
  Pagination,
  Text,
  Card,
  Row,
  Col,
  Image,
  Checkbox,
  Container,
  Progress as NextUIProgress,
} from "@nextui-org/react";
import "./ModulesBudgeting.css";
import { Link } from "react-router-dom";
import { steps } from "framer-motion";

const ModulesBudgeting = () => {
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        backgroundColor="white"
        maxWidth={2000}
        p={8}
        m="10px auto"
        position="relative"
      >
        <Container gap={2} responsive justify="space-around">
          <Text size={36} fontWeight={"normal"} h2>
            Lesson 2: Financial Futurists
          </Text>
          <Card>
            <Card.Body>
              <Text size={30} h2>
                Overview:
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                In this budgeting lesson, we will delve into the fundamental
                concepts of budgeting, a crucial skill that can lead you to
                financial independence. Understanding the importance of creating
                a personal budget, tracking your income and expenses, and making
                informed financial decisions are key elements of this lesson.
              </Text>
            </Card.Body>
          </Card>

          <Spacer y={2} />

          <Container responsive>
            <Row>
              <Container responsive>
                <Text size={30} h2>
                  Learning Goals:
                </Text>
                <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                  By the end of this lesson, you should:
                </Text>
                <UnorderedList spacing={3}>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Recognize the significance of budgeting
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    The role of budgeting in achieving financial independence in
                    the future
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Gain insights into the benefits of budgeting
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Learn how to effectively manage your financial resources.
                  </ListItem>
                </UnorderedList>
              </Container>
              <Image
                css={{ width: "80%" }}
                src="https://img.freepik.com/free-vector/business-innovation-based-alternative-financial-services-digital-currency-market-exchange-financial-technology-flat-vector-illustration-fintech-startup-economy-finances-concept-banner_74855-22404.jpg?w=1800&t=st=1691429610~exp=1691430210~hmac=cb907fdd911492cb50f43db38a0046bb5652210bf6e497e1671dd651e0ec2ef2"
              />
            </Row>
          </Container>
        </Container>
        <Spacer y={2} />
        <Container>
          <Container>
            <Row>
              <Image
                css={{ width: "80%" }}
                src="https://img.freepik.com/free-vector/flat-woman-with-personal-financial-bill-payment-calendar_88138-935.jpg?w=1800&t=st=1691430334~exp=1691430934~hmac=ab313552c4c1bd58ed7384b6f6921a4900ff8d37d21be08f080130742a133406"
              />
              <Card>
                <Card.Body>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    Creating a personal budget is a cornerstone of financial
                    success and an essential step towards becoming financially
                    independent.
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    A budget serves as a financial roadmap, enabling you to
                    manage your money efficiently by carefully planning how you
                    allocate your income and control your expenses. One of the
                    primary reasons for budgeting is to have a clear
                    understanding of all the money flowing in and out of your
                    life.
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    By tracking your income and expenses, you gain valuable
                    insights into your spending patterns, helping you make
                    informed financial decisions. This knowledge empowers you to
                    prioritize your financial goals and align your spending with
                    your aspirations, ensuring that your hard-earned money is
                    put to its best use. A critical aspect of budgeting is
                    establishing an emergency fund.
                  </Text>
                </Card.Body>
              </Card>
            </Row>
            <Spacer y={2} />
            <Container responsive>
              <Row justify="space-between">
                <Card>
                  <Card.Body>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Life can be unpredictable, and unexpected financial
                      challenges may arise. Having a dedicated emergency fund
                      acts as a safety net during difficult times, offering
                      peace of mind and financial security. It is crucial to
                      resist the temptation of using this fund for non-essential
                      purposes and only tap into it when faced with genuine
                      emergencies. As you progress on your budgeting journey,
                      you may encounter tough decisions that require balancing
                      short-term desires with long-term financial goals. For
                      example, deciding between buying cheaper and more
                      expensive items might seem inconsequential, but such
                      choices can have a significant impact on your overall
                      budget.
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Learning to make sound financial decisions, even in
                      seemingly minor matters, contributes to your financial
                      well-being in the long run. Budgeting not only provides a
                      sense of control over your finances but also helps you
                      develop financial discipline and resilience. It allows you
                      to identify areas where you can cut back on spending or
                      explore opportunities for increasing your income.
                      Additionally, budgeting can help you avoid unnecessary
                      debt, manage existing debt responsibly, and pave the way
                      to a debt-free future.
                    </Text>
                  </Card.Body>
                </Card>
                <Spacer x={4} />
                <Col>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    In conclusion, budgeting is an indispensable tool for
                    achieving financial independence and managing your financial
                    journey effectively. By creating a personal budget, tracking
                    your income and expenses, and making informed financial
                    choices, you take control of your finances and lay the
                    groundwork for a secure and prosperous future.
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    Remember that every financial decision, no matter how small,
                    can impact your overall financial health, so it is essential
                    to be proactive and deliberate in managing your budget to
                    achieve your financial goals.
                  </Text>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
        <Spacer y={2} />
        <Grid.Container css={{ justifyContent: "space-between" }}>
          <Grid>
            <Link to="/Dashboard/Modules/Intro">
              <Button auto flat size={"xl"}>
                Back
              </Button>
            </Link>
          </Grid>
          <Grid>
            <Link to="/Dashboard/Modules/Savings">
              <Button auto flat size={"xl"} color={"secondary"}>
                Next
              </Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Box>
    </>
  );
};

export default ModulesBudgeting;
