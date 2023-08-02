import React from "react";
import {
  Progress,
  Box,
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
  Modal,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
  Progress as NextUIProgress,
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
        maxWidth={1200}
        p={8}
        m="10px auto"
        position="relative"
      >
        <Text h1>Investing</Text>
        <Text h3>
          Lesson Overview: In this comprehensive lesson on investing, we will
          delve into the concept of investing and its crucial role in building
          wealth and achieving financial goals. You will learn about various
          investment options, risk and return considerations, and the
          significant impact of starting early on your investment journey.
        </Text>
        <Text h3>
          Learning Goals: By the end of this lesson, you will have a
          comprehensive understanding of different types of investments, the
          relationship between risks and returns, and various investing
          strategies. You will also grasp the importance of starting early and
          how compounding can significantly boost your investment returns over
          time.
        </Text>
        <img
          className="stocks"
          src="https://cdn-icons-png.flaticon.com/512/6410/6410570.png"
        />

        <Text h2 size={30}>
          Investing and its significance: Investing involves deploying your
          money into assets or financial instruments with the expectation of
          generating a profit or a positive return over time. It is a
          fundamental element of building wealth and achieving financial
          independence. By investing wisely, you can make your money work for
          you, creating opportunities for growth and financial security.
          <Text h2 size={30}>
            Types of investments: There are numerous investment options
            available, each with its own risk and return profile. Some common
            investment choices include:
            <Text h2 size={25}>
              Stocks: Investing in shares of publicly traded companies. Stocks
              can offer significant potential for long-term growth but also come
              with higher volatility and risk.
            </Text>
            <Text h2 size={25}>
              Bonds: Lending money to governments or corporations in exchange
              for periodic interest payments and the return of the principal
              amount. Bonds are generally considered safer than stocks but may
              have lower potential for growth.
            </Text>
            <Text h2 size={25}>
              Mutual Funds: Pooling money from multiple investors to invest in a
              diversified portfolio of stocks, bonds, or other assets. Mutual
              funds offer diversification and professional management.
            </Text>
            <Text h2 size={25}>
              Real Estate: Investing in properties for rental income or capital
              appreciation. Real estate can provide a tangible asset with the
              potential for passive income and value appreciation.
            </Text>
            <Text h2 size={25}>
              Retirement Accounts: Tax-advantaged accounts such as 401(k)s or
              IRAs designed to help individuals save for retirement.
            </Text>
          </Text>
          <Text h2 size={30}>
            Understanding risk and return: Investing involves taking risks with
            the expectation of receiving higher returns. Different types of
            investments carry varying levels of risk, and it's essential to
            understand the risk-return trade-off. Generally, investments with
            higher potential returns also have higher associated risks. It's
            crucial to align your investment choices with your risk tolerance
            and financial goals.
          </Text>
          <Text h2 size={30}>
            Conducting research before investing: Investing wisely requires
            conducting thorough research on potential investment opportunities.
            Analyze the performance history, market trends, and economic
            indicators relevant to the investment. Understanding the
            fundamentals and assessing the future outlook of an investment can
            help you make informed decisions and reduce potential risks.
          </Text>
          <Text h2 size={30}>
            Importance of starting early: Starting early in your investment
            journey is one of the most powerful advantages you have. The concept
            of compounding allows your investments to grow not only based on
            your initial contributions but also on the returns generated over
            time. The longer your money remains invested, the more it has the
            potential to grow exponentially. Starting early gives you the
            advantage of time, which can make a significant difference in your
            investment outcomes over the long run.
          </Text>
          <Text h2 size={30}>
            In conclusion, investing is a key aspect of financial planning that
            can lead to wealth accumulation and financial independence.
            Understanding different investment options, considering risk and
            return, and conducting thorough research are vital to making sound
            investment decisions. Moreover, starting early can exponentially
            enhance your investment growth through the power of compounding. By
            applying these principles, you can set yourself on a path towards
            achieving your financial goals and securing a prosperous future.
          </Text>
        </Text>
        <Row>
          <Link to="/Dashboard/Modules/Credit">
            <Button> Back </Button>
          </Link>
          <Spacer x={35}/>
          <Link to="/Dashboard/Modules">
            <Button> Next</Button>
          </Link>
        </Row>
      </Box>
    </>
  );
};

export default ModulesInvesting;
