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
                  By the end of this lesson, you will understand the critical
                  role of saving in achieving your financial objectives. You
                  will learn to set and pursue saving goals, both short-term and
                  long-term, and acquire the skills to develop a personalized
                  saving plan using your budget as a valuable tool.
                </Text>
              </Container>
              <Image
                className="moneybag"
                src="https://img.freepik.com/free-vector/happy-tiny-man-woman-with-big-open-wallet_74855-5869.jpg?w=2000&t=st=1691175208~exp=1691175808~hmac=fc6dab4f4fa591c3cfef4371e36f15c86ea293aabaac758bac04e3da67bdd82a"
              />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Card>
              <Card.Body>
                <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                  Saving money is a fundamental pillar of financial success and
                  plays a pivotal role in realizing your dreams and aspirations.
                  Whether you are aiming for short-term objectives, such as
                  saving for a new phone, or pursuing long-term goals, like
                  building a comfortable retirement fund, saving is the key to
                  turning your aspirations into reality.
                </Text>
              </Card.Body>
            </Card>

            <Grid.Container gap={3} justify="center">
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Understanding the importance of saving:
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
                      Types of saving goals:
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

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Creating a saving plan:
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
            </Grid.Container>
          </Container>

          <Spacer y={2}/>
          
          <Image
            className="piggy"
            src="https://img.freepik.com/free-vector/saving-money-financial-concept_74855-7849.jpg?w=2000&t=st=1691175166~exp=1691175766~hmac=e2176eaf74a10f73c9bec00ded629cff378714f84abc0b0c71a4bd504be796dd"
          />

          <Text h2 css={{ fontWeight: "$normal" }} size={30}>
            In conclusion, saving is a powerful financial tool that empowers you
            to achieve your dreams and build financial security. By
            understanding the significance of saving, setting appropriate saving
            goals, and creating a personalized saving plan, you take significant
            steps towards financial success. Cultivating a habit of regular
            saving and diligently working towards your goals will contribute to
            your long-term financial well-being and open up opportunities for a
            brighter and more prosperous future.
          </Text>
        </Container>
        <Spacer y={2} />
        <Row>
          <Link to="/Dashboard/Modules/Budgeting">
            <Button> Back</Button>
          </Link>
          <Spacer x={35} />
          <Link to="/Dashboard/Modules/Credit">
            <Button className="next-btn"> Next</Button>
          </Link>
        </Row>
      </Box>
    </>
  );
};

export default ModulesSavings;
