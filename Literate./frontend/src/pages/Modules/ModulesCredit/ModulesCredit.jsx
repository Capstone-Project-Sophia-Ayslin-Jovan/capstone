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
import "./ModulesCredit.css";
import { Link } from "react-router-dom";

const ModulesCredit = () => {
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
            Lesson 4: The Cash Chronicles
          </Text>
          <Card>
            <Card.Body>
              <Text size={30} h2>
                Overview:
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                In this comprehensive lesson on credit and debt management, we
                will explore the fundamental concepts of credit, debt, and their
                implications on your financial well-being. Understanding
                creditworthiness, credit scores, different types of debt, and
                interest rates will equip you with the knowledge needed to make
                responsible borrowing decisions and build a strong credit
                profile.
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
                  By the end of this lesson, you will have a clear understanding
                  of credit and debt management. You will learn how to borrow
                  responsibly, comprehend the impact of debt on your financial
                  health, and develop strategies to build and maintain a
                  positive credit history.
                </Text>
              </Container>
              <Image
                className="cash"
                src="https://img.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_74855-26108.jpg?w=1800&t=st=1691175469~exp=1691176069~hmac=685f6d1b2e83a73085d720991bdea7009d1d21c80369892533add7c5d6ad597f"
              />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Grid.Container gap={3} justify="center">
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Credit and its significance:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Credit refers to your ability to borrow money based on
                      your creditworthiness, which is assessed by lenders to
                      determine your credit risk. Having access to credit is
                      essential for major purchases, such as buying a car or a
                      house, as it allows you to acquire assets that may be
                      beyond your immediate financial means. Building and
                      maintaining a good credit history is vital as it opens up
                      opportunities for favorable loan terms and interest rates
                      in the future.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Debt and its implications:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Debt is the amount of money borrowed that must be repaid
                      over time, often with interest. It is essential to manage
                      debt responsibly to maintain a healthy financial life.
                      Different types of debt include credit card debt, student
                      loans, mortgages, personal loans, and more. Poor debt
                      management can lead to financial stress, adversely
                      affecting your creditworthiness and limiting your
                      borrowing capacity in the future.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Understanding credit scores:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Credit scores are numerical representations of your
                      creditworthiness, calculated based on factors such as
                      payment history, credit utilization, length of credit
                      history, credit mix, and new credit accounts. Lenders use
                      credit scores to assess the risk of lending to you. A
                      higher credit score indicates a lower credit risk and
                      increases your chances of getting approved for loans with
                      favorable terms.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Container>
        </Container>

        <Spacer y={1} />

        <Image
          className="debt"
          src="https://img.freepik.com/free-vector/businessman-pushing-credit-score-speedometer-from-poor-good-tiny-person-improving-personal-credit-history-with-efforts-flat-vector-illustration-business-reputation-customer-loan-concept_74855-20943.jpg?w=2000&t=st=1691174890~exp=1691175490~hmac=25da1bc7739b64ae2457634ee89d49d1894332946eedd48a9dbad2342684d406"
        />
        <Container>
          <Grid.Container gap={2}>
            <Grid xs={6}>
              <Card>
                <Card.Body>
                  <Text h2 size={24}>
                    Managing debt responsibly:
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    To maintain a positive credit profile, it is crucial to
                    manage debt responsibly. This includes making timely
                    payments on all debts, avoiding carrying high credit card
                    balances, and not taking on more debt than you can
                    comfortably afford to repay. Developing a debt repayment
                    plan and budgeting can help you stay on track and pay off
                    debts systematically.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card>
                <Card.Body>
                  <Text h2 size={24}>
                    Importance of interest rates:
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    Interest rates are the costs of borrowing money and are
                    typically expressed as a percentage of the total loan
                    amount. Different types of debt come with varying interest
                    rates, which can significantly impact the total amount you
                    repay. It is essential to pay attention to interest rates
                    and consider strategies to reduce the overall interest paid,
                    such as refinancing high-interest debt or making extra
                    payments to reduce the principal amount.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Container>

        <Text h2 css={{ fontWeight: "$normal" }} size={30}>
          In conclusion, credit and debt management are crucial aspects of your
          financial journey. By understanding creditworthiness, credit scores,
          types of debt, and interest rates, you can make informed financial
          decisions and build a strong credit profile. Responsible borrowing,
          prudent debt management, and regular attention to credit-related
          matters will not only help you achieve your financial goals but also
          pave the way for a stable and secure financial future.
        </Text>
        <Row>
          <Link to="/Dashboard/Modules/Savings">
            <Button> Back</Button>
          </Link>
          <Spacer x={35} />
          <Link to="/Dashboard/Modules/Investing">
            <Button className="next-btn"> Next</Button>
          </Link>
        </Row>
      </Box>
    </>
  );
};

export default ModulesCredit;
