import React from "react";
import { BudgetContext } from "../../contexts/budget";
import {
  Grid,
  Card,
  Progress,
  Text,
  Container,
  Spacer,
  Collapse,
  Modal,
  Button,
  Input,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./ExpenseTracking.css";
import ExpenseCard from "./ExpenseCard";
import { Pie } from "react-chartjs-2";
const ExpenseTracking = ({}) => {
  const [visible, setVisible] = useState(false);
  const openHandler = () => {
    setVisible(true);
  };
  const closeHandler = () => {
    setVisible(false);
  };
  const { budgetInfo } = useContext(BudgetContext);
  const navigate = useNavigate();
  //setting piechart labels
  const budgetLabels = Object.keys(budgetInfo.budgetData);
  //getting allocation sums for categories
  const subCatSum = new Array(budgetLabels.length).fill(0);
  Object.keys(budgetInfo.budgetData).map((category, index) =>
    budgetInfo.budgetData[category].map((listItem) => {
      subCatSum[index] += parseInt(listItem.allocation);
    })
  );

  return (
    <div>
      <Text h1>Fall Semester : $600</Text>
      <Grid.Container gap={2}>
        <Grid xs={4}>
          <Collapse.Group splitted>
            <Collapse
              css={{ width: 500 }}
              bordered
              title="Essentials"
              subtitle={<Progress value={100} />}
            >
              <Button flat size={"lg"} onPress={openHandler}>
                Groceries $100
              </Button>
              <Modal
                width="400px"
                closeButton
                onClose={closeHandler}
                open={visible}
              >
                <Modal.Header>
                  <Container>
                    <Text size={22} css={{ fontWeight: "bold" }} p>
                      Groceries
                    </Text>
                    <Text size={18}>How much did you spend today?</Text>
                  </Container>
                </Modal.Header>
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    type="number"
                    // value={totalSpent}
                    color="primary"
                    aria-label="spent"
                    labelLeft="$"
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button auto color={"success"} flat>
                    Enter
                  </Button>
                </Modal.Footer>
              </Modal>
            </Collapse>
          </Collapse.Group>
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
    </div>
  );
};

export default ExpenseTracking;
