import React from "react";
// import { BudgetContext } from "../../contexts/budget";
// import { useContext } from "react";
import { Card, Progress } from "@nextui-org/react";
const ExpenseCard = ({ category, categoryValues }) => {
  return (
    <div>
      <Card isHoverable>
        <Card.Body>
          <Text h2>{category}</Text>
        </Card.Body>

        {categoryValues.map((allocation) => {
          <Card.Footer>
            <Progress value={allocation - totalSpent} />;
          </Card.Footer>;
        })}
      </Card>
      ;
    </div>
  );
};

export default ExpenseCard;
