"use client";

import { useState, useContext, useEffect } from "react";
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
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";
import BudgetResults from "./BudgetResults/BudgetResults";
import BudgetInfo from "./BudgetInfo/BudgetInfo";
import apiClient from "../../services/apiClient";
import { AuthorizeContext } from "../../contexts/authUser";

export default function MSBudget() {
  const { authState, setAuthState } = useContext(AuthorizeContext);
  const [budgetInfo, setBudgetInfo] = useState({});

  // This is to avoid user not being defined.
  useEffect(() => {
    setBudgetInfo({
      userId: authState.user?.id,
      name: null,
      startDate: null,
      endDate: null,
      goal: null,
      budgetData: {},
    });
  }, [authState.isAuthenticated]);

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16.67);
  const [isDisabled, setIsDisabled] = useState(false);

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
        {/* <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress> */}
        <NextUIProgress value={progress} />
        <Spacer y={1} />
        {step === 1 ? (
          <BudgetLanding />
        ) : step === 2 ? (
          <BudgetInfo
            budgetInfo={budgetInfo}
            setBudgetInfo={setBudgetInfo}
            setIsDisabled={setIsDisabled}
          />
        ) : step === 3 ? (
          <BudgetCategory
            budgetInfo={budgetInfo}
            setBudgetInfo={setBudgetInfo}
            setIsDisabled={setIsDisabled}
          />
        ) : step === 4 ? (
          <BudgetExpenses
            budgetInfo={budgetInfo}
            setBudgetInfo={setBudgetInfo}
            setIsDisabled={setIsDisabled}
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
                    setProgress(progress - 16.67);
                  }
                }}
                disabled={step === 1 || step >= 6}
              >
                Back
              </Button>
              {step >= 5 ? (
                <Button
                  disabled={step >= 6}
                  color="success"
                  onPress={async () => {
                    setStep(step + 1);
                    setProgress(100);
                    console.log(budgetInfo);
                    const budget = await apiClient.createBudget(budgetInfo);
                    setAuthState((state) => {
                      const updateAuthState = { ...state };
                      console.log(updateAuthState);
                      updateAuthState.user.currBudgetId = budget.id;
                      console.log(updateAuthState);
                      return updateAuthState;
                    });
                    toast({
                      title: "Budget Created.",
                      description: "Click on Home to View Your budget",
                      status: "success",
                      isClosable: true,
                    });
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  w="7rem"
                  disabled={step > 1 ? isDisabled : false}
                  onPress={() => {
                    setStep(step + 1);
                    setProgress(progress + 16.67);
                  }}
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
