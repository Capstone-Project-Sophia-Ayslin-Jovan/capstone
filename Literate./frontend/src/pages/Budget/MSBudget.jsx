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
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Stack,
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
  Divider,
  Card,
} from "@nextui-org/react";

import { useToast } from "@chakra-ui/react";
import BudgetLanding from "./BudgetLanding/BudgetLanding";
import BudgetCategory from "./BudgetCategory/BudgetCategory";
import BudgetExpenses from "./BudgetExpenses/BudgetExpenses";
import BudgetResults from "./BudgetResults/BudgetResults";
import BudgetInfo from "./BudgetInfo/BudgetInfo";
import apiClient from "../../services/apiClient";

import { AuthorizeContext } from "../../contexts/authUser";
import { NewBudgetContext } from "../../contexts/newBudget";

import { PlusIcon } from "../../components/PlusIcon/PlusIcon";
import { BudgetContext } from "../../contexts/budget";
import OverwriteBudget from "./OverwriteBudget/OverwriteBudget";

export default function MSBudget() {
  const { authState, setAuthState } = useContext(AuthorizeContext);
  const { newBudget, setNewBudget } = useContext(NewBudgetContext);
  const { budget, setBudget } = useContext(BudgetContext);
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [budgetLeft, setBudgetLeft] = useState(newBudget.goal);

  const steps = [
    { title: "Step 1", description: "What is Budgeting?" },
    { title: "Step 2", description: "Budget Information" },
    { title: "Step 3", description: "Choose Categories" },
    { title: "Step 4", description: "Distribute Funds" },
    { title: "Step 5", description: "Review & Create Budget" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  console.log(activeStep);
  const activeStepText = steps[activeStep].description;
  const slicedSteps = steps.slice(0, steps.length - 1);

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
        {budget.budgetData ? (
          <OverwriteBudget />
        ) : (
          <>
            <Stack>
              <Stepper size="sm" index={activeStep} gap="0">
                {slicedSteps.map((step, index) => (
                  <Step key={index} gap="0">
                    <StepIndicator>
                      <StepStatus complete={<StepIcon />} />
                    </StepIndicator>
                    <StepSeparator _horizontal={{ ml: "0" }} />
                  </Step>
                ))}
              </Stepper>
              <Text>
                Step {activeStep}: <b>{activeStepText}</b>
              </Text>
            </Stack>
            <Spacer y={1} />
            <Divider />
            {step === 1 ? (
              <BudgetLanding />
            ) : step === 2 ? (
              <BudgetInfo setIsDisabled={setIsDisabled} />
            ) : step === 3 ? (
              <BudgetCategory setIsDisabled={setIsDisabled} />
            ) : step === 4 ? (
              <BudgetExpenses
                budgetLeft={budgetLeft}
                setBudgetLeft={setBudgetLeft}
                setIsDisabled={setIsDisabled}
              />
            ) : (
              <BudgetResults budgetLeft={budgetLeft} />
            )}
            <ButtonGroup mt="5%" w="100%">
              <Flex w="100%" justify="center">
                <Flex alignItems="center" gap={5}>
                  <Button
                    onPress={() => {
                      if (step !== 1) {
                        setStep(step - 1);
                        setActiveStep(activeStep - 1);
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
                      iconRight={<PlusIcon fill="currentColor" />}
                      onPress={async () => {
                        setStep(step + 1);
                        console.log(newBudget.userId);
                        await apiClient.createBudget(newBudget);
                        setBudget((state) => ({ ...state, isUpdated: true }));
                        setNewBudget({
                          userId: null,
                          name: null,
                          startDate: null,
                          endDate: null,
                          goal: null,
                          budgetData: {},
                        });
                        setBudgetLeft(0);
                        setStep(1);
                        setActiveStep(0);
                        toast({
                          title: "Budget Created.",
                          description: "Click on Home to View Your budget",
                          status: "success",
                          duration: null,
                          isClosable: true,
                        });
                      }}
                    >
                      Create
                    </Button>
                  ) : (
                    <Button
                      w="7rem"
                      disabled={step > 1 ? isDisabled : false}
                      onPress={() => {
                        setStep(step + 1);
                        setActiveStep(activeStep + 1);
                      }}
                    >
                      Next
                    </Button>
                  )}
                </Flex>
              </Flex>
            </ButtonGroup>
          </>
        )}
      </Box>
    </>
  );
}
