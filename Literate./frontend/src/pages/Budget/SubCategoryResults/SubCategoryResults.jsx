"use client";
import React, { useState } from "react";
import {
  Navbar,
  Button,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Checkbox,
  Container
} from "@nextui-org/react";

const SubCategoryResults = ({category, budgetInfo}) => {
  return (
    <Container responsive="true">
      <Text h2> {category} </Text>
      <Text h4> </Text>
    </Container>
  );
};

export default SubCategoryResults;
