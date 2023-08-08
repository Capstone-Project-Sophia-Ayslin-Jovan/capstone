import { Button, Container, Spacer, Text, Divider } from "@nextui-org/react";
import React, { useContext } from "react";
import apiClient from "../../../services/apiClient";
import { BudgetContext } from "../../../contexts/budget";
import { PlusIcon } from "../../../components/PlusIcon/PlusIcon";

const OverwriteBudget = () => {
  // Access the budget context
  const { budget, setBudget } = useContext(BudgetContext);

  // Handle delete and create a new budget
  const handleOnPress = async () => {
    await apiClient.deleteBudget(budget.id); // Delete current budget
    setBudget((state) => ({ ...state, isUpdated: true })); // Mark budget as updated
  };

  return (
    <Container display="flex" justify="center">
      <Text color="success" size={30} css={{ textAlign: "center" }}>
        Congratuations!
      </Text>
      <Divider></Divider>
      {/* Success message */}
      <Text size={30} css={{ textAlign: "center" }}>
        You have successfully created your budget.
      </Text>
      {/* Instruction */}
      <Text size={30} css={{ textAlign: "center" }}>
        To view your budget, click on Home in the sidebar.
      </Text>
      <Divider></Divider>
      {/* Warning message */}
      <Text color="warning" size={30}>
        Would you like to DELETE and CREATE a NEW budget?
      </Text>
      <Spacer y={3} />
      {/* Button to create a new budget */}
      <Button
        color="success"
        iconRight={<PlusIcon />}
        css={{ minWidth: "13vw" }}
        onPress={() => {
          handleOnPress();
        }}
      >
        Create New Budget
      </Button>
    </Container>
  );
};

export default OverwriteBudget;
