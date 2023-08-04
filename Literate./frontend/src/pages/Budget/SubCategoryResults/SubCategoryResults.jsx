"use client";
import React, { useState } from "react";
import { Text, Container, Grid, Card, Table } from "@nextui-org/react";
import "./SubCategoryResults.css";
const SubCategoryResults = ({ category, categoryValues }) => {
  // Maybe resize category title later?
  return (
    <Container>
      <Text h2>{category}</Text>
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>ALLOCATION</Table.Column>
        </Table.Header>
        <Table.Body>
          {categoryValues.map(({ name, allocation }, index) => (
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
