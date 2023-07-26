"use client";
import React from "react";
import { Spacer, Modal, Text, Input, Row, Card } from "@nextui-org/react";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";

const SubCategoryCard = ({ name, subCatInput }) => {
  return (
    <div className="sub-cat-card">
      <Spacer x={4} />
      <Card>
        <Text h2> {name} </Text>
        <SubCategoryInput name={name} subCatInput={subCatInput} />
      </Card>
    </div>
  );
};

export default SubCategoryCard;
