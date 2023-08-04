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

          <Container>
            <Row>
              <Container>
                <Text size={30} h2>
                  Learning Goals:
                </Text>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  By the end of this lesson, you should recognize the
                  significance of budgeting and its role in achieving financial
                  independence in the future. You will gain insights into the
                  benefits of budgeting and learn how to effectively manage your
                  financial resources.
                </Text>
              </Container>
              <Image
                className="tracking-expense"
                src="https://img.freepik.com/free-vector/electronic-documentation-man-with-registration-checking-repository-log-online-approval-screen-form-validation-page-expense-chronicles-vector-isolated-concept-metaphor-illustration_335657-4323.jpg?w=1800&t=st=1691175285~exp=1691175885~hmac=c58eb5f92e546d5b292800dea7a4ed25e0ad3721032fab98e6551fce4409431c"
              />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Card>
              <Card.Body>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  Creating a personal budget is a cornerstone of financial
                  success and an essential step towards becoming financially
                  independent. A budget serves as a financial roadmap, enabling
                  you to manage your money efficiently by carefully planning how
                  you allocate your income and control your expenses. One of the
                  primary reasons for budgeting is to have a clear understanding
                  of all the money flowing in and out of your life. By tracking
                  your income and expenses, you gain valuable insights into your
                  spending patterns, helping you make informed financial
                  decisions. This knowledge empowers you to prioritize your
                  financial goals and align your spending with your aspirations,
                  ensuring that your hard-earned money is put to its best use. A
                  critical aspect of budgeting is establishing an emergency
                  fund.
                </Text>
              </Card.Body>
            </Card>

            <Spacer y={2}/>
            
            <Image
              className="budgeting"
              src="https://img.freepik.com/free-vector/financial-accounting-female-accountant-cartoon-character-making-financial-report-summary-analysis-reporting-financial-statement-income-balance_335657-2380.jpg?w=1800&t=st=1691175371~exp=1691175971~hmac=558e60b1db6673776b7580a6d8b00c3af09aed840f8846e0fa462d678d2292fe"
            />

            <Card>
              <Card.Body>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  Life can be unpredictable, and unexpected financial challenges
                  may arise. Having a dedicated emergency fund acts as a safety
                  net during difficult times, offering peace of mind and
                  financial security. It is crucial to resist the temptation of
                  using this fund for non-essential purposes and only tap into
                  it when faced with genuine emergencies. As you progress on
                  your budgeting journey, you may encounter tough decisions that
                  require balancing short-term desires with long-term financial
                  goals. For example, deciding between buying cheaper and more
                  expensive items might seem inconsequential, but such choices
                  can have a significant impact on your overall budget.
                </Text>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  Learning to make sound financial decisions, even in seemingly
                  minor matters, contributes to your financial well-being in the
                  long run. Budgeting not only provides a sense of control over
                  your finances but also helps you develop financial discipline
                  and resilience. It allows you to identify areas where you can
                  cut back on spending or explore opportunities for increasing
                  your income. Additionally, budgeting can help you avoid
                  unnecessary debt, manage existing debt responsibly, and pave
                  the way to a debt-free future.
                </Text>
              </Card.Body>
            </Card>
          </Container>
          <Spacer y={2}/>
          <Text h2 css={{ fontWeight: "$normal" }} size={30}>
            In conclusion, budgeting is an indispensable tool for achieving
            financial independence and managing your financial journey
            effectively. By creating a personal budget, tracking your income and
            expenses, and making informed financial choices, you take control of
            your finances and lay the groundwork for a secure and prosperous
            future. Remember that every financial decision, no matter how small,
            can impact your overall financial health, so it is essential to be
            proactive and deliberate in managing your budget to achieve your
            financial goals.
          </Text>
        </Container>

        <Row>
          <Link to="/Dashboard/Modules/Intro">
            <Button> Back</Button>
          </Link>
          <Spacer x={35} />
          <Link to="/Dashboard/Modules/Savings">
            <Button className="next-btn"> Next</Button>
          </Link>
        </Row>
      </Box>
    </>
  );
};

export default ModulesBudgeting;
