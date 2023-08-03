import { Button, Container, Spacer, Text, Divider } from "@nextui-org/react";
import React, { useContext } from "react";
import apiClient from "../../../services/apiClient";
import { BudgetContext } from "../../../contexts/budget";

const OverwriteBudget = () => {
  const { budget, setBudget } = useContext(BudgetContext);
  console.log(budget);
  const handleOnPress = async () => {
    console.log("budget id", budget.id);
    await apiClient.deleteBudget(budget.id);
    setBudget((state) => ({ ...state, isUpdated: true }));
  };
  return (
    <Container display="flex" justify="center">
      <Text color="success" size={30} css={{ textAlign: "center" }}>
        Congratuations!
      </Text>
      <Divider></Divider>
      <Text size={30} css={{ textAlign: "center" }}>
        You have successfully created your budget.
      </Text>
      <Text size={30} css={{ textAlign: "center" }}>
        To view your budget, click on Home in the sidebar.
      </Text>
      <Divider></Divider>
      <Text color="warning" size={30}>
        Would you like to DELETE and CREATE a NEW budget?
      </Text>
      <Spacer y={3} />
      <Button
        color="success"
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
