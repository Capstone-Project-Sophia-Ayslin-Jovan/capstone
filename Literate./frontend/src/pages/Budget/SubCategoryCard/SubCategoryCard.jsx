"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Card,
  Button,
  Container,
  Grid,
} from "@nextui-org/react";
import SubCategoryInput from "../SubCategoryInput/SubCategoryInput";
import { TrashIcon } from "../../../components/TrashIcon/TrashIcon";

const SubCategoryCard = ({ budgetInfo, setBudgetInfo, name }) => {
  const [disableTrash, setDisableTrash] = useState(false);
  useEffect(() => {
    if (Object.keys(budgetInfo.budgetData).length === 1) setDisableTrash(true);
  }, [budgetInfo]);
  const handleOnPress = () => {
    setBudgetInfo((prevBudgetInfo) => {
      const updatedBudgetInfo = { ...prevBudgetInfo };
      delete updatedBudgetInfo.budgetData[name];
      return updatedBudgetInfo;
    });
  };
  return (
    <Card>
      <Card.Header>
        <Grid.Container
          css={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            md={11.2}
            css={{ justifyContent: "center", paddingLeft: "40px" }}
          >
            <Text h2> {name}</Text>
          </Grid>
          <Grid md={0.8}>
            <Button
              auto
              flat
              disabled={disableTrash}
              color="error"
              onPress={handleOnPress}
              iconRight={<TrashIcon fill="currentColor" />}
            />
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <SubCategoryInput
          budgetInfo={budgetInfo}
          setBudgetInfo={setBudgetInfo}
          name={name}
        />
      </Card.Body>
      <Card.Footer>
        <Row justify="flex-end"></Row>
      </Card.Footer>
    </Card>
  );
};

export default SubCategoryCard;
