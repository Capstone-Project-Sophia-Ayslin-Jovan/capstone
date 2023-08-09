import React from "react";
import {
  Progress,
  Box,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  ButtonGroup,
  Button as ChakraButton,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input as ChakraInput,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Center,
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
  Image,
  Checkbox,
  Container,
  Progress as NextUIProgress,
  Col,
} from "@nextui-org/react";
import "./ModulesIntro.css";
import { Link } from "react-router-dom";

const ModulesIntro = () => {
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
        className="text"
      >
        <Container gap={2} responsive justify="space-around">
          <Text size={36} fontWeight={"normal"} h2>
            Lesson 1: Money Matters
          </Text>
          <Card>
            <Card.Body>
              <Text size={30} h2>
                Overview:
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                Financial literacy is a crucial concept that profoundly impacts
                your life and financial well-being. In this lesson, we will
                explore the fundamental principles of financial literacy and its
                significance in building wealth for the future.
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                By understanding and adopting good financial habits, you can
                make informed decisions, set financial goals, and effectively
                manage your money.
              </Text>
            </Card.Body>
          </Card>
          <Spacer y={2} />
          <Container>
            <Row>
              <Container>
                <Text size={30} h2>
                  Learning Goals:
                </Text>
                <Text h2 css={{ fontWeight: "$normal", width: 600 }} size={24}>
                  By the end of this lesson, you should have a clear
                  understanding of the basics of financial literacy habits
                  including:
                </Text>
                <UnorderedList spacing={3}>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Budgeting
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Saving
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Investing and Debt Management
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Understanding Credit
                  </ListItem>
                </UnorderedList>
              </Container>
              <Image src="https://img.freepik.com/free-vector/happy-woman-holding-coins-banknotes-hands-cartoon-female-person-pink-background-flat-illustration_74855-18380.jpg?w=2000&t=st=1691134827~exp=1691135427~hmac=2e08791d18d938eb31b94c5516c302c03aab7b4e6b000f9b3b755df90a5aa757" />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Card>
              <Card.Body>
                <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                  Financial literacy plays a vital role in achieving financial
                  success and stability in the long run. It involves making wise
                  decisions with your money, setting achievable financial
                  objectives, and managing your resources effectively.{" "}
                </Text>
                <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                  Developing good financial literacy habits can significantly
                  impact your financial journey and improve your overall quality
                  of life. There are several key areas to focus on when
                  developing good financial literacy habits:
                </Text>
              </Card.Body>
            </Card>
            <Grid.Container gap={3}>
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Budgeting:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Budgeting is the process of creating a plan for your
                      income and expenses. It allows you to track your spending,
                      prioritize your financial goals, and ensure you have
                      enough funds for both necessities and future aspirations.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Saving:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Saving is a fundamental aspect of financial well-being. By
                      consistently setting aside a portion of your income, you
                      create a safety net for unexpected expenses and have funds
                      to pursue your dreams, such as travel, education, or
                      investments.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Debt Management:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Understanding how to manage debt is crucial for
                      maintaining a healthy financial status. Being aware of the
                      types of debt you incur, making timely payments, and
                      minimizing high-interest debts can lead to financial
                      freedom. Understanding Credit: Your credit score and
                      history play a significant role in your financial life. A
                      good credit score enables you to access loans and credit
                      facilities at favorable terms, while poor credit can limit
                      your financial options.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Investing:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing is a powerful tool for growing your wealth over
                      time. By putting your money into various investment
                      vehicles such as stocks, bonds, or real estate, you have
                      the potential to generate passive income and achieve
                      financial growth. By integrating all these areas and
                      developing good financial habits, you can work towards
                      becoming financially independent and securing a stable
                      financial future. Being financially literate empowers you
                      to navigate economic challenges confidently and make the
                      most of your resources.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Container>{" "}
          <Spacer y={2} />
          <Container justify="center">
            <Row>
              <Image src="https://img.freepik.com/free-vector/tiny-businessman-with-spyglass-standing-stack-coins-increase-income-flat-vector-illustration-financial-growth-investment-success-concept-banner-website-design-landing-web-page_74855-25330.jpg?w=2000&t=st=1691135109~exp=1691135709~hmac=3c64b8229df06e85211e5a5de0e7077151a754fd41d68d7b62ff9ab48bd9dbe7" />
              <Container>
                <Text h2 css={{ fontWeight: "$normal", width: 600 }} size={26}>
                  In conclusion, financial literacy is an essential skill that
                  can significantly impact your financial well-being and future
                  prosperity.
                </Text>
                <Text h2 css={{ fontWeight: "$normal", width: 600 }} size={26}>
                  By understanding the importance of budgeting, saving, debt
                  management, credit knowledge, and investing, you can build a
                  solid foundation for your financial journey and work towards
                  achieving long-term financial independence.
                </Text>
              </Container>
            </Row>
          </Container>
          <Spacer y={2} />
        </Container>
        <Container>
          <Row>
            <Col>
              <Link to="/Dashboard/Modules">
                <Button auto flat size={"xl"}>
                  Back
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/Dashboard/Modules/Budgeting">
                <Button
                  auto
                  flat
                  size={"xl"}
                  color={"secondary"}
                  className="next-btn"
                >
                  Next
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default ModulesIntro;
