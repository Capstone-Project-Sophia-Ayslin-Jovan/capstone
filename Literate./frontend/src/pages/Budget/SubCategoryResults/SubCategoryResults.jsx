"use client";
import React, { useState } from "react";
import { Text, Container, Grid, Card } from "@nextui-org/react";
import "./SubCategoryResults.css";
const SubCategoryResults = ({ category, categoryValues }) => {
  return (
    <div className="category-results">
      <Container responsive="true">
        <Card css={{ width: 400 }}>
          <Card.Body>
            <Text h2>{category}</Text>
            {categoryValues.map(({ name, allocation }) => (
              <Text size={24} p>
                {name} ${allocation}
              </Text>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default SubCategoryResults;
