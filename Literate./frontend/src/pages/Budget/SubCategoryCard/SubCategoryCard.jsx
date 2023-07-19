"use client";
import React from "react";
import {
  Navbar,
  Button,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Checkbox,
} from "@nextui-org/react";

const SubCategoryCard = ({page}) => {
  return (
    <div>
      <Text h3>Budget Amount Left: $</Text>
      <Text h3> {page} </Text>
    </div>
  );
};

export default SubCategoryCard;
