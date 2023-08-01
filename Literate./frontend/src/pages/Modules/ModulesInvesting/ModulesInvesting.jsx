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

const ModulesInvesting = () => {
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        backgroundColor="white"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        position="relative"
      >
        <Text h4>
          Lesson Overview: In this comprehensive lesson on investing, we will
          delve into the concept of investing and its crucial role in building
          wealth and achieving financial goals. You will learn about various
          investment options, risk and return considerations, and the
          significant impact of starting early on your investment journey.
        </Text>

        <Text h4>
          Learning Goals: By the end of this lesson, you will have a
          comprehensive understanding of different types of investments, the
          relationship between risks and returns, and various investing
          strategies. You will also grasp the importance of starting early and
          how compounding can significantly boost your investment returns over
          time.
        </Text>

        <Text h4>
          Investing and its significance: Investing involves deploying your
          money into assets or financial instruments with the expectation of
          generating a profit or a positive return over time. It is a
          fundamental element of building wealth and achieving financial
          independence. By investing wisely, you can make your money work for
          you, creating opportunities for growth and financial security. Types
          of investments: There are numerous investment options available, each
          with its own risk and return profile. Some common investment choices
          include: Stocks: Investing in shares of publicly traded companies.
          Stocks can offer significant potential for long-term growth but also
          come with higher volatility and risk. Bonds: Lending money to
          governments or corporations in exchange for periodic interest payments
          and the return of the principal amount. Bonds are generally considered
          safer than stocks but may have lower potential for growth. Mutual
          Funds: Pooling money from multiple investors to invest in a
          diversified portfolio of stocks, bonds, or other assets. Mutual funds
          offer diversification and professional management. Real Estate:
          Investing in properties for rental income or capital appreciation.
          Real estate can provide a tangible asset with the potential for
          passive income and value appreciation. Retirement Accounts:
          Tax-advantaged accounts such as 401(k)s or IRAs designed to help
          individuals save for retirement. Understanding risk and return:
          Investing involves taking risks with the expectation of receiving
          higher returns. Different types of investments carry varying levels of
          risk, and it's essential to understand the risk-return trade-off.
          Generally, investments with higher potential returns also have higher
          associated risks. It's crucial to align your investment choices with
          your risk tolerance and financial goals. Conducting research before
          investing: Investing wisely requires conducting thorough research on
          potential investment opportunities. Analyze the performance history,
          market trends, and economic indicators relevant to the investment.
          Understanding the fundamentals and assessing the future outlook of an
          investment can help you make informed decisions and reduce potential
          risks. Importance of starting early: Starting early in your investment
          journey is one of the most powerful advantages you have. The concept
          of compounding allows your investments to grow not only based on your
          initial contributions but also on the returns generated over time. The
          longer your money remains invested, the more it has the potential to
          grow exponentially. Starting early gives you the advantage of time,
          which can make a significant difference in your investment outcomes
          over the long run. In conclusion, investing is a key aspect of
          financial planning that can lead to wealth accumulation and financial
          independence. Understanding different investment options, considering
          risk and return, and conducting thorough research are vital to making
          sound investment decisions. Moreover, starting early can exponentially
          enhance your investment growth through the power of compounding. By
          applying these principles, you can set yourself on a path towards
          achieving your financial goals and securing a prosperous future.
        </Text>
      </Box>
    </>
  );
};

export default ModulesInvesting;
