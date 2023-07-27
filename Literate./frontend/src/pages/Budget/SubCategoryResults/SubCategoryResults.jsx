"use client";
import React, { useState } from "react";
import { Text, Container, Grid } from "@nextui-org/react";
import "./SubCategoryResults.css";
const SubCategoryResults = ({ category, categoryValues }) => {
  return (
    <div className="category-results">
      <Container responsive="true" css={{ width: 400 }}>
        <Text h2>{category}</Text>
        {categoryValues.map(({ name, allocation }) => (
          <Text size={24} p>
            {name} ${allocation}
          </Text>
        ))}
      </Container>
    </div>
  );
};
export default SubCategoryResults;
