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
    // Disable the trash icon if there is only one sub-category left
    if (Object.keys(newBudget.budgetData).length === 1) {
      setDisableTrash(true);
    } else {
      setDisableTrash(false);
    }
  }, [newBudget]);

  const handleOnPress = () => {
    // Remove the selected sub-category from the budget data
    setNewBudget((prevBudgetInfo) => {
      const updatedBudgetInfo = { ...prevBudgetInfo };
      delete updatedBudgetInfo.budgetData[name];
      return updatedBudgetInfo;
    });
  };

  return (
    <Card>
      <Card.Header>
        {/* Container to display sub-category name and trash icon */}
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
            {/* Display the sub-category name */}
            <Text h2> {name}</Text>
          </Grid>
          <Grid md={0.8}>
            {/* Button to delete the sub-category */}
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
        {/* SubCategoryInput component to input details for the sub-category */}
        <SubCategoryInput name={name} />
      </Card.Body>
      <Card.Footer>
        <Row justify="flex-end"></Row>
      </Card.Footer>
    </Card>
  );
};

export default SubCategoryCard;
