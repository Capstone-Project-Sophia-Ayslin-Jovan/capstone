"use client";
import React from "react";
import { Spacer, Modal, Text, Input, Row, Card } from "@nextui-org/react";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";

const SubCategoryCard = ({ category }) => {
  console.log("HERERE", category);
  return (
    <div className="sub-cat-card">
      <Spacer x={4} />
      <Card>
        <Text h2> {category} </Text>
        <SubCategoryInput />
      </Card>
    </div>
  );
};

export default SubCategoryCard;
