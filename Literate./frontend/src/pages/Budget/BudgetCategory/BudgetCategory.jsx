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
} from "@nextui-org/react";

const BudgetCategory = ({ handleNextStep, handlePreviousStep }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChange = (value, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handleNext = () => {
    if (selectedCategories.length > 0) {
      handleNextStep();
    } else {
      // No checkboxes are checked
      // Handle the case when no checkboxes are checked
    }
  };
  console.log(selectedCategories)
  return (
    <div>
      <Text h1>What will you be budgeting?</Text>
      <Spacer y={5} />
      <Text h3>What will you be budgeting?</Text>

      <Checkbox.Group color="secondary" label="Check all that apply">
        <Checkbox
          onChange={(checked) => handleChange("essentials", checked)}
          value="essentials"
        >
          Essentials
        </Checkbox>
        <Checkbox onChange={(checked) => handleChange("bills", checked)} value="bills">
          Housing, Utilities, & Bills
        </Checkbox>
        <Checkbox onChange={(checked) => handleChange("transportation", checked)} value="transportation">
          Transportation
        </Checkbox>
        <Checkbox onChange={(checked) => handleChange("subscriptions", checked)} value="subscriptions">
          Subscriptions & Memberships
        </Checkbox>
        <Checkbox onChange={(checked) => handleChange("health", checked)} value="health">
          Health & Insurance
        </Checkbox>
        <Checkbox onChange={(checked) => handleChange("recreation", checked)} value="recreation">
          Recreation
        </Checkbox>
        <Checkbox onChange={(checked) => handleChange("other", checked)} value="other">
          Other
        </Checkbox>
      </Checkbox.Group>

      <Spacer y={5} />
      <Row>
        <Spacer x={4} />
        <Button onPress={handlePreviousStep}>Back</Button>
        <Spacer x={1} />
        <Button onPress={handleNextStep}>Next</Button>
      </Row>
    </div>
  );
};

export default BudgetCategory;
