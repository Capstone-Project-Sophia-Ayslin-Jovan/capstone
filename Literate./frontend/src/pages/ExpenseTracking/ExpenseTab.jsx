import React, { useContext, useState } from "react";
import {
  Card,
  Progress,
  Table,
  Button,
  Modal,
  Container,
  Input,
  Text,
  useAsyncList,
  useCollator,
} from "@nextui-org/react";
import { PlusIcon } from "../../components/PlusIcon/PlusIcon";
import apiClient from "../../services/apiClient";
import { BudgetContext } from "../../contexts/budget";

const ExpenseTab = ({ category, categoryValues }) => {
  const collator = useCollator({ numeric: true });
  async function load({ signal }) {
    const res = await fetch("https://swapi.py4e.com/api/people/?search", {
      signal,
    });
    const json = await res.json();
    return {
      items: json.results,
    };
  }
  async function sort({ items, sortDescriptor }) {
    return {
      items: items.sort((a, b) => {
        let first = a[sortDescriptor.column];
        let second = b[sortDescriptor.column];
        let cmp = collator.compare(first, second);
        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }
        return cmp;
      }),
    };
  }
  const list = useAsyncList({ load, sort });

  const [totalSpent, setTotalSpent] = useState("");
  const [visible, setVisible] = useState(null);
  const { setBudget } = useContext(BudgetContext);

  const openHandler = (id) => {
    setVisible(id);
  };
  const closeHandler = () => {
    setVisible(null);
  };

  const handleTotalSpentChange = (event) => {
    setTotalSpent(event.target.value);
  };

  function getTimeAgo(timestamp) {
    const currentTime = new Date();
    const timestampDate = new Date(timestamp);
    const timeDifference = currentTime - timestampDate; // Time difference in milliseconds

    if (timeDifference < 60000) {
      // Less than a minute
      return `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 3600000) {
      // Less than an hour
      return `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 86400000) {
      // Less than a day
      return `${Math.floor(timeDifference / 3600000)} hours ago`;
    } else {
      // More than a day
      return `${Math.floor(timeDifference / 86400000)} days ago`;
    }
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addExpense = async (id, newExpense) => {
    console.log(id);
    await apiClient.updateBudget(id, { newExpense: newExpense });
    setBudget((state) => ({ ...state, isUpdated: true }));
  };

  return (
    <Table
      aria-label="Example table with custom cells"
      css={{ height: "auto", minWidth: "100%" }}
    >
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>$ Total Spent</Table.Column>
        <Table.Column>$ Allocation</Table.Column>
        <Table.Column>$ Remaining</Table.Column>
        <Table.Column>Last Updated</Table.Column>
        <Table.Column>Add Expense</Table.Column>
      </Table.Header>
      <Table.Body>
        {categoryValues.map((subcategory, index) => (
          <Table.Row key={index}>
            <Table.Cell>{subcategory.name}</Table.Cell>
            <Table.Cell>{formatter.format(subcategory.totalSpent)}</Table.Cell>
            <Table.Cell>{formatter.format(subcategory.allocation)}</Table.Cell>
            <Table.Cell
              css={
                subcategory.allocation - subcategory.totalSpent < 0
                  ? { color: "red" }
                  : { color: "green" }
              }
            >
              {formatter.format(
                subcategory.allocation - subcategory.totalSpent
              )}
            </Table.Cell>
            <Table.Cell>{getTimeAgo(subcategory.updated_at)}</Table.Cell>
            <Table.Cell>
              <Button
                onPress={() => {
                  openHandler(subcategory.id);
                }}
              >
                Add Expense
              </Button>
              <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible === subcategory.id}
                onClose={closeHandler}
              >
                <Modal.Header>
                  <Container>
                    <Text size={22} css={{ fontWeight: "bold" }} p>
                      {subcategory.name}
                    </Text>
                    <Text size={18}>How much did you spend today?</Text>
                  </Container>
                </Modal.Header>
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    type="number"
                    value={totalSpent}
                    color="primary"
                    aria-label="spent"
                    labelLeft="$"
                    placeholder="Expense"
                    onChange={handleTotalSpentChange}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    iconRight={<PlusIcon />}
                    color={"success"}
                    css={{ minWidth: "8vw" }}
                    onPress={() => {
                      addExpense(subcategory.id, totalSpent);
                      setTotalSpent("");
                      closeHandler();
                    }}
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ExpenseTab;
