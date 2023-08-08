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
  Grid,
  Badge,
} from "@nextui-org/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { PlusIcon } from "../../components/PlusIcon/PlusIcon";
import apiClient from "../../services/apiClient";
import { BudgetContext } from "../../contexts/budget";

const ExpenseTab = ({ category, categoryValues }) => {
  // Initialize collator for sorting
  const collator = useCollator({ numeric: true });

  // Function to load data asynchronously
  async function load({ signal }) {
    const res = await fetch("https://swapi.py4e.com/api/people/?search", {
      signal,
    });
    const json = await res.json();
    return {
      items: json.results,
    };
  }

  // Function to sort items based on column and direction
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

  // UseAsyncList hook to manage async loading and sorting
  const list = useAsyncList({ load, sort });

  // State for total spent and visibility of modal
  const [totalSpent, setTotalSpent] = useState("");
  const [visible, setVisible] = useState(null);
  const { setBudget } = useContext(BudgetContext);

  // Handler to open modal
  const openHandler = (id) => {
    setVisible(id);
  };

  // Handler to close modal
  const closeHandler = () => {
    setVisible(null);
  };

  // Handler for input change
  const handleTotalSpentChange = (event) => {
    setTotalSpent(event.target.value);
  };

  // Function to convert timestamp to time ago format
  function getTimeAgo(timestamp) {
    // ... (existing code)
  }

  // Currency formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  // Function to add an expense
  const addExpense = async (id, newExpense) => {
    // ... (existing code)
  };

  return (
    <Table aria-label="Example table with custom cells" css={{ height: "auto", minWidth: "100%" }}>
      <Table.Header>
        {/* Column headers */}
      </Table.Header>
      <Table.Body>
        {categoryValues.map((subcategory, index) => (
          <Table.Row key={index}>
            {/* Table cells for subcategory information */}
            {/* Button to open modal */}
            {/* Modal for adding expense */}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ExpenseTab;
