import React, { useState } from "react";
// import { BudgetContext } from "../../contexts/budget";
// import { useContext } from "react";
import {
  Progress,
  Modal,
  Text,
  Input,
  Container,
  Button,
  Collapse,
} from "@nextui-org/react";
const ExpenseCard = ({ category, categoryValues }) => {
  const [visible, setVisible] = useState(false);
  const openHandler = () => {
    setVisible(true);
  };
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <Collapse
      css={{ width: 500 }}
      bordered
      title={category}
      //   subtitle={<Progress value={allocation - totalSpent} />}
    >
      {categoryValues.map(({ name, allocation }) => {
        <div>
          <Button flat size={"lg"} onPress={openHandler}>
            {name} ${allocation}
          </Button>
          <Modal
            width="400px"
            closeButton
            onClose={closeHandler}
            open={visible}
          >
            <Modal.Header>
              <Container>
                <Text size={22} css={{ fontWeight: "bold" }} p>
                  {name}
                </Text>
                <Text size={18}>How much did you spend today?</Text>
              </Container>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                type="number"
                name="totalSpent"
                // value={totalSpent}
                color="primary"
                aria-label="spent"
                labelLeft="$"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto color={"success"} flat>
                Enter
              </Button>
            </Modal.Footer>
          </Modal>
        </div>;
      })}
    </Collapse>
  );
};

export default ExpenseCard;
