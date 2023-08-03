import React from "react";
import { BudgetContext } from "../../contexts/budget";
import { useContext } from "react";
import { Card, Text, Progress } from "@nextui-org/react";
import { StatLabel, StatNumber, StatHelpText, Stat } from "@chakra-ui/stat";
const CategoryHome = ({ category, allocationSum, totalSpentSum }) => {
  const { budget } = useContext(BudgetContext);

  return (
    <div>
      <Card css={{ width: 400 }}>
        <Card.Body>
          <Text h2>{category}</Text>
          <Stat fontSize="lg">
            <StatLabel>Amount remaining</StatLabel>
            <StatNumber>${allocationSum - totalSpentSum}</StatNumber>
            <StatHelpText>
              {budget.startDate}- {budget.endDate}
            </StatHelpText>
          </Stat>

          <Progress
            value={((allocationSum - totalSpentSum) / allocationSum) * 100}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryHome;
