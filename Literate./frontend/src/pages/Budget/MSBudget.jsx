"use client";

import { useState, useContext } from "react";
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

import { useToast } from "@chakra-ui/react";
import { BudgetContext } from "../../contexts/budget";
import BudgetGoal from "./BudgetGoal/BudgetGoal";
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";
import BudgetResults from "./BudgetResults/BudgetResults";

export default function MSBudget() {
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        backgroundColor="#ffffff"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        position="relative"
      >
        {/* <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress> */}
        <NextUIProgress value={progress} />
        {step === 1 ? (
          <BudgetLanding />
        ) : step === 2 ? (
          <BudgetGoal budgetInfo={budgetInfo} setBudgetInfo={setBudgetInfo} />
        ) : step === 3 ? (
          <BudgetCategory
            budgetInfo={budgetInfo}
            setBudgetInfo={setBudgetInfo}
          />
        ) : step === 4 ? (
          <BudgetExpenses
            budgetInfo={budgetInfo}
            setBudgetInfo={setBudgetInfo}
          />
        ) : (
          <BudgetResults budgetInfo={budgetInfo} />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justify="center">
            <Flex alignItems="center" gap={5}>
              <Button
                onPress={() => {
                  if (step !== 1) {
                    setStep(step - 1);
                    setProgress(progress - 20);
                  }
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              {step === 5 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onPress={() => {
                    if (step !== 6) setStep(step + 1);
                    toast({
                      title: "Account created.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  w="7rem"
                  onPress={() => {
                    setStep(step + 1);
                    if (step === 5) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 20);
                    }
                  }}
                  colorScheme="teal"
                  variant="outline"
                >
                  Next
                </Button>
              )}
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
