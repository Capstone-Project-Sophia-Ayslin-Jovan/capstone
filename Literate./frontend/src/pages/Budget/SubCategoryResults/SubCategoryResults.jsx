import React from "react";
import { Text, Container, Table } from "@nextui-org/react";
import "./SubCategoryResults.css";

const SubCategoryResults = ({ category, categoryValues }) => {
  return (
    <Container>
      {/* Display the category title */}
      <Text h2>{category}</Text>

      {/* Create a table to display category values */}
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        {/* Table Header */}
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>ALLOCATION</Table.Column>
        </Table.Header>

        {/* Table Body */}
        <Table.Body>
          {categoryValues.map(({ name, allocation }, index) => (
            // Display each row in the table
            <Table.Row key={index}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>${allocation}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default SubCategoryResults;
