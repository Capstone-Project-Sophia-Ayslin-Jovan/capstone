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
import { NewBudgetContext } from "../../../contexts/newBudget";

const SubCategoryCard = ({ name }) => {
  const { newBudget, setNewBudget } = useContext(NewBudgetContext);
  const [disableTrash, setDisableTrash] = useState(false);
  useEffect(() => {
    if (Object.keys(newBudget.budgetData).length === 1) setDisableTrash(true);
  }, [newBudget]);
  const handleOnPress = () => {
    setNewBudget((prevBudgetInfo) => {
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
        <SubCategoryInput name={name} />
      </Card.Body>
      <Card.Footer>
        <Row justify="flex-end"></Row>
      </Card.Footer>
    </Card>
  );
};

export default SubCategoryCard;
