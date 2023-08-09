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
  Card,
  Text,
  Pagination,
  Row,
  Image,
  Container,
  Progress as NextUIProgress,
  Grid,
  Col,
} from "@nextui-org/react";
import "./ModulesInvesting.css";
import { Link } from "react-router-dom";

const ModulesInvesting = () => {
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
            Lesson 5: From Pennies to Prosperity
          </Text>
          <Card>
            <Card.Body>
              <Text size={30} h2>
                Overview:
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                In this comprehensive lesson on investing, we will delve into
                the concept of investing and its crucial role in building wealth
                and achieving financial goals. You will learn about various
                investment options, risk and return considerations, and the
                significant impact of starting early on your investment journey.
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
                <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                  By the end of this lesson, you will:
                </Text>
                <UnorderedList spacing={3}>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Have a comprehensive understanding of different types of
                    investments
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Understand the relationship between risks and returns and
                    various investing strategies
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Grasp the importance of starting early
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Learn how compounding can significantly boost your
                    investment returns over time
                  </ListItem>
                </UnorderedList>
              </Container>
              <Image src="https://img.freepik.com/free-vector/business-man-described-showing-graph-stock-financial-trade-market-diagram-vector-illustration-flat-design_1150-39768.jpg?w=1800&t=st=1691435512~exp=1691436112~hmac=90de4393fb6d8518b531ff1aaf44fc5b38eecfe1250d9f3814543a174765a66f" />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Text h2 css={{ fontWeight: "$medium" }} size={26}>
              Investing involves deploying your money into assets or financial
              instruments with the expectation of generating a profit or a
              positive return over time. It is a fundamental element of building
              wealth and achieving financial independence. By investing wisely,
              you can make your money work for you, creating opportunities for
              growth and financial security.
            </Text>
            <Text h2 css={{ fontWeight: "$medium" }} size={26}>
              There are numerous investment options available, each with its own
              risk and return profile. Some common investment choices include:
            </Text>
            <Spacer y={1} />
            <Grid.Container gap={3} justify="center">
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Stocks:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing in shares of publicly traded companies. Stocks
                      can offer significant potential for long-term growth but
                      also come with higher volatility and risk.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Bonds:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Lending money to governments or corporations in exchange
                      for periodic interest payments and the return of the
                      principal amount. Bonds are generally considered safer
                      than stocks but may have lower potential for growth.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Mutual Funds:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Pooling money from multiple investors to invest in a
                      diversified portfolio of stocks, bonds, or other assets.
                      Mutual funds offer diversification and professional
                      management.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Real Estate:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing in properties for rental income or capital
                      appreciation. Real estate can provide a tangible asset
                      with the potential for passive income and value
                      appreciation.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card css={{ height: "fit-content" }}>
                  <Card.Body>
                    <Text h2 size={24}>
                      Retirement Accounts:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Tax-advantaged accounts such as 401(k)s or IRAs designed
                      to help individuals save for retirement.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Image src="https://img.freepik.com/free-vector/tiny-worker-looking-increasing-income-chart-through-spyglass_778687-1189.jpg?w=1800&t=st=1691436000~exp=1691436600~hmac=f06046ca7e6af3b35453792964f132f675e3df3299388115232ec822bbf22d9b" />
              </Grid>
            </Grid.Container>

            <Grid.Container gap={3} justify="center">
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Understanding risk and return:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing involves taking risks with the expectation of
                      receiving higher returns. Different types of investments
                      carry varying levels of risk, and it's essential to
                      understand the risk-return trade-off. Generally,
                      investments with higher potential returns also have higher
                      associated risks. It's crucial to align your investment
                      choices with your risk tolerance and financial goals.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Conducting research before investing:{" "}
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing wisely requires conducting thorough research on
                      potential investment opportunities. Analyze the
                      performance history, market trends, and economic
                      indicators relevant to the investment. Understanding the
                      fundamentals and assessing the future outlook of an
                      investment can help you make informed decisions and reduce
                      potential risks.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Importance of starting early:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Starting early in your investment journey is one of the
                      most powerful advantages you have. The concept of
                      compounding allows your investments to grow not only based
                      on your initial contributions but also on the returns
                      generated over time. The longer your money remains
                      invested, the more it has the potential to grow
                      exponentially. Starting early gives you the advantage of
                      time, which can make a significant difference in your
                      investment outcomes over the long run.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Container>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    In conclusion, investing is a key aspect of financial
                    planning that can lead to wealth accumulation and financial
                    independence. Understanding different investment options,
                    considering risk and return, and conducting thorough
                    research are vital to making sound investment decisions.
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                    Moreover, starting early can exponentially enhance your
                    investment growth through the power of compounding. By
                    applying these principles, you can set yourself on a path
                    towards achieving your financial goals and securing a
                    prosperous future.
                  </Text>
                </Container>
              </Grid>
            </Grid.Container>
          </Container>
        </Container>
        <Spacer y={2} />
        <Grid.Container css={{ justifyContent: "space-between" }}>
          <Grid>
            <Link to="/Dashboard/Modules/Credit">
              <Button auto flat size={"xl"}>
                Back
              </Button>
            </Link>
          </Grid>
          <Grid>
            <Link to="/Dashboard/Modules">
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

export default ModulesInvesting;
