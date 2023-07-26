"use client";
import React from "react";
import { Spacer, Modal, Text, Input, Row, Card } from "@nextui-org/react";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";

const SubCategoryCard = ({ name, budgetData }) => {
  return (
    <div className="sub-cat-card">
      <Spacer x={4} />
      <Card>
        <Text h2> {name} </Text>
        <SubCategoryInput name={name} budgetData={budgetData} />
      </Card>
    </div>
  );
};

export default SubCategoryCard;
