import React, { useState, useEffect } from "react";
import { BudgetContext } from "../../contexts/budget";
import { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Card,
  Text,
  Progress,
  Container,
  Collapse,
  red,
} from "@nextui-org/react";
import { StatLabel, StatNumber, StatHelpText, Stat } from "@chakra-ui/stat";
const CategoryHome = ({
  category,
  allocationSum,
  totalSpentSum,
  categoryValues,
}) => {
  const { budget } = useContext(BudgetContext);
  const [isLow, setIsLow] = useState(false);
  const [isVeryLow, setIsVeryLow] = useState(false);
  //progress bar conditional rendering
  useEffect(() => {
    if (totalSpentSum >= allocationSum * 0.9) {
      setIsLow(false); // Reset the other flag
      setIsVeryLow(true);
    } else if (
      totalSpentSum < allocationSum * 0.9 &&
      totalSpentSum >= allocationSum * 0.5
    ) {
      setIsLow(true);
      setIsVeryLow(false); // Reset the other flag
    } else {
      setIsLow(false);
      setIsVeryLow(false);
    }
  });
  //usd formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  //date converter
  function formatDate(inputDate) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const parts = inputDate.split("-");
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    return `${months[monthIndex]} ${day}`;
  }
  return (
    <div>
      <Collapse
        bordered
        shadow
        css={{ width: 600 }}
        title={
          <Container>
            <Text h2>{category}</Text>
            <Stat fontSize="lg">
              <StatLabel>Amount remaining</StatLabel>
              <StatNumber>
                {formatter.format(allocationSum - totalSpentSum)}
              </StatNumber>
              <StatHelpText>
                {formatDate(budget.startDate)} - {formatDate(budget.endDate)}
              </StatHelpText>
            </Stat>

            <Progress
              color={isLow ? "warning" : isVeryLow ? "error" : "primary"}
              value={((allocationSum - totalSpentSum) / allocationSum) * 100}
            />
          </Container>
        }
      >
        <Text size={20} h2>
          Budget Left:
        </Text>
        {categoryValues.map(({ name, allocation, totalSpent }) => {
          return (
            <Container>
              <Text
                size={22}
                css={
                  allocation - totalSpent < 0
                    ? { fontWeight: "$normal", color: "red" }
                    : { fontWeight: "$normal", color: "black" }
                }
                h2
              >
                {name} {formatter.format(allocation - totalSpent)}
              </Text>
            </Container>
          );
        })}
      </Collapse>
    </div>
  );
};

export default CategoryHome;
