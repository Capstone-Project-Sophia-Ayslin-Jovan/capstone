import React from "react";
import {
  Progress,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Card,
  Container,
} from "@nextui-org/react";
import { BudgetContext } from "../../../../contexts/budget";
import { useContext } from "react";

const Bills = () => {
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);
  categoryValues = budgetInfo.budgetData["Housing,Utilities,&Bills"]
  let allocationTotal = 0;
  {
    categoryValues.map(
      ({ name, allocation }, index) => (allocationTotal += parseInt(allocation, 10))
    );
  }
  return (
    <Container>
      <Text h1>
        {budgetInfo.name}: ${budgetInfo.total}
      </Text>
      <Spacer y={9}/>
      <Container>
        <Text> {budgetInfo.name} ${allocationTotal}</Text>
        <Progress color="primary" value={1} />
      </Container>
    </Container>
  );
};

export default Bills;
