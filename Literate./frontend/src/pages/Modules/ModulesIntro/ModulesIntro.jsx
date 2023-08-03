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
  Pagination,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
  Progress as NextUIProgress,
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
        maxWidth={1200}
        p={8}
        m="10px auto"
        position="relative"
        className="text"
      >
        <Text h1>Introduction</Text>
        <Text h2 size={30}>
          Lesson Overview: Financial literacy is a crucial concept that
          profoundly impacts your life and financial well-being. In this lesson,
          we will explore the fundamental principles of financial literacy and
          its significance in building wealth for the future. By understanding
          and adopting good financial habits, you can make informed decisions,
          set financial goals, and effectively manage your money.
        </Text>

        <Text h2 size={30}>
          Learning Goals: By the end of this lesson, you should have a clear
          understanding of the basics of financial literacy habits. We will
          cover various areas that contribute to financial literacy, including
          budgeting, saving, investing, debt management, and understanding
          credit.
        </Text>
        <img
          className="money-jar"
          src="https://static.vecteezy.com/system/resources/previews/002/698/207/original/jar-with-money-coins-and-bills-dollars-free-vector.jpg"
        />

        <Text h2 size={30}>
          Financial literacy plays a vital role in achieving financial success
          and stability in the long run. It involves making wise decisions with
          your money, setting achievable financial objectives, and managing your
          resources effectively. Developing good financial literacy habits can
          significantly impact your financial journey and improve your overall
          quality of life. There are several key areas to focus on when
          developing good financial literacy habits:
          <Spacer y={1} />
          <Text h2 size={30}>
            Budgeting: Budgeting is the process of creating a plan for your
            income and expenses. It allows you to track your spending,
            prioritize your financial goals, and ensure you have enough funds
            for both necessities and future aspirations.
          </Text>
          <Text h2 size={30}>
            Saving: Saving is a fundamental aspect of financial well-being. By
            consistently setting aside a portion of your income, you create a
            safety net for unexpected expenses and have funds to pursue your
            dreams, such as travel, education, or investments.
          </Text>
          <Text h2 size={30}>
            Debt Management: Understanding how to manage debt is crucial for
            maintaining a healthy financial status. Being aware of the types of
            debt you incur, making timely payments, and minimizing high-interest
            debts can lead to financial freedom. Understanding Credit: Your
            credit score and history play a significant role in your financial
            life. A good credit score enables you to access loans and credit
            facilities at favorable terms, while poor credit can limit your
            financial options.
          </Text>
          <Text h2 size={30}>
            Investing: Investing is a powerful tool for growing your wealth over
            time. By putting your money into various investment vehicles such as
            stocks, bonds, or real estate, you have the potential to generate
            passive income and achieve financial growth. By integrating all
            these areas and developing good financial habits, you can work
            towards becoming financially independent and securing a stable
            financial future. Being financially literate empowers you to
            navigate economic challenges confidently and make the most of your
            resources.
          </Text>
          <Text h2 size={30}>
            In conclusion, financial literacy is an essential skill that can
            significantly impact your financial well-being and future
            prosperity. By understanding the importance of budgeting, saving,
            debt management, credit knowledge, and investing, you can build a
            solid foundation for your financial journey and work towards
            achieving long-term financial independence.
          </Text>
        </Text>
        <Row>
          <Link to="/Dashboard/Modules">
            <Button> Back</Button>
          </Link>
          <Spacer x={35}/>
          <Link to="/Dashboard/Modules/Budgeting">
            <Button> Next</Button>
          </Link>
        </Row>
      </Box>
    </>
  );
};

export default ModulesIntro;
