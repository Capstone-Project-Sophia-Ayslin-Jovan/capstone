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
  Col,
  Checkbox,
  Container,
  Progress as NextUIProgress,
} from "@nextui-org/react";
import "./ModulesSavings.css";
import { Link } from "react-router-dom";

const ModulesSavings = () => {
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
            Lesson 3: Live to Save
          </Text>
          <Card>
            <Card.Body>
              <Text size={30} h2>
                Overview:
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                In this comprehensive lesson on saving, we will explore various
                aspects, including the significance of saving money, the
                different types of saving goals, and the process of creating an
                effective saving plan. The ultimate aim of this lesson is to
                highlight the importance of regular saving, cultivate a saving
                habit, and provide practical strategies for building financial
                security.
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
                    Understand the critical role of saving in achieving your
                    financial objectives
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Learn to set and pursue both short-term and long-term saving
                    goals
                  </ListItem>
                  <ListItem fontWeight="normal" fontSize="xl">
                    Acquire the skills to develop a personalized saving plan
                    using your budget as a valuable tool{" "}
                  </ListItem>
                </UnorderedList>
              </Container>
              <Image
                css={{ width: 900 }}
                src="https://img.freepik.com/free-vector/hand-from-phone-throwing-dollar-coin-into-piggy-bank-person-donating-money-investing-online-flat-vector-illustration-savings-charity-concept-banner-website-design-landing-web-page_74855-24597.jpg?t=st=1691432046~exp=1691432646~hmac=09284dbd8842aefaecbd3fc7588907ebbdc6f2a19a883e47fb5334b113e8ed53"
              />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Grid.Container gap={3} justify="center">
              <Grid xs={6}>
                <Container>
                  <Text h2 css={{ fontWeight: "$normal" }} size={26}>
                    Saving money is a fundamental pillar of financial success
                    and plays a pivotal role in realizing your dreams and
                    aspirations.
                  </Text>
                  <Text h2 css={{ fontWeight: "$normal" }} size={26}>
                    Whether you are aiming for short-term objectives, such as
                    saving for a new phone, or pursuing long-term goals, like
                    building a comfortable retirement fund, saving is the key to
                    turning your aspirations into reality.
                  </Text>
                </Container>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      The Importance Of Saving:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      {" "}
                      Saving money is more than just setting aside a portion of
                      your income; it is an essential step towards building
                      financial security and achieving financial independence.
                      By consistently saving, you create a financial cushion to
                      cover unexpected expenses and navigate through challenging
                      times. It also provides you with the freedom to pursue
                      opportunities, invest in your personal growth, and make
                      major life decisions without undue financial stress.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Creating A Saving Plan:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Setting saving goals is only the first step; an effective
                      saving plan is the roadmap that guides you towards
                      achieving those goals. A saving plan involves devising a
                      strategy to allocate a portion of your income to different
                      saving goals while still managing your daily expenses and
                      other financial obligations. Your budget becomes a crucial
                      tool in this process, helping you identify areas where you
                      can save more and make adjustments to achieve your goals.
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      An essential element of a saving plan is to automate your
                      savings. By setting up automatic transfers to a dedicated
                      savings account, you ensure that a portion of your income
                      is consistently earmarked for saving, making it easier to
                      stick to your plan. Another aspect of a well-rounded
                      saving plan is regularly reviewing your progress. Life
                      circumstances change, and financial goals may evolve over
                      time. Periodically reassessing your saving goals and
                      adjusting your plan accordingly ensures that your saving
                      strategy remains relevant and effective.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card css={{ height: "fit-content" }}>
                  <Card.Body>
                    <Text h2 size={24}>
                      Types Of Saving Goals:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Saving goals can vary widely in terms of time horizon and
                      purpose. Short-term goals may include saving for a
                      vacation, purchasing a new gadget, or creating an
                      emergency fund. On the other hand, long-term goals may
                      involve saving for a down payment on a house, funding a
                      child's education, or planning for retirement. By
                      understanding the different types of saving goals, you can
                      prioritize and allocate your resources accordingly.{" "}
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>

            <Row justify="space-between">
              <Image
                css={{ width: 1600 }}
                src="https://img.freepik.com/free-vector/happy-tiny-people-growing-money-tree-isolated-flat-illustration_74855-16162.jpg?size=626&ext=jpg&ga=GA1.2.1734790172.1689287009&semt=ais"
              />
              <Spacer x={6} />
              <Container>
                <Text h2 css={{ fontWeight: "$normal", width: 800 }} size={24}>
                  In conclusion, saving is a powerful financial tool that
                  empowers you to achieve your dreams and build financial
                  security.
                </Text>
                <Text h2 css={{ fontWeight: "$normal", width: 800 }} size={24}>
                  By understanding the significance of saving, setting
                  appropriate saving goals, and creating a personalized saving
                  plan, you take significant steps towards financial success.
                  Cultivating a habit of regular saving and diligently working
                  towards your goals will contribute to your long-term financial
                  well-being and open up opportunities for a brighter and more
                  prosperous future.
                </Text>
              </Container>
            </Row>
          </Container>
        </Container>
        <Container>
          <Row>
            <Col>
              <Link to="/Dashboard/Modules/Budgeting">
                <Button auto flat size={"xl"}>
                  {" "}
                  Back
                </Button>
              </Link>
            </Col>
            <Col>
              <Link to="/Dashboard/Modules/Credit">
                <Button
                  auto
                  flat
                  size={"xl"}
                  color={"secondary"}
                  className="next-btn"
                >
                  {" "}
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

export default ModulesSavings;
