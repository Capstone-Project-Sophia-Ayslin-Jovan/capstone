import React from "react";
import {
  Navbar,
  Button,
  Spacer,
  Modal,
  Text,
  Input,
  Row,
  Card,
  Container,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const ModulesLanding = ({}) => {
  return (
    <div>
      <Link to="/Dashboard/ModulesIntro">
        <Card isHoverable="true" isPressable="true">
          <Text h2> Introduction</Text>
        </Card>
      </Link>
      <Spacer y={1} />
      <Link to="/Dashboard/ModulesBudgeting">
        <Card isHoverable="true" isPressable="true">
          <Text h2> Budgeting</Text>
        </Card>
      </Link>
      <Spacer y={1} />
      <Link to="/Dashboard/ModulesSavings">
        <Card isHoverable="true" isPressable="true">
          <Text h2> Saving</Text>
        </Card>
      </Link>
      <Spacer y={1} />
      <Link to="/Dashboard/ModulesCredit">
        <Card isHoverable="true" isPressable="true">
          <Text h2> Credit and Debt Management</Text>
        </Card>
      </Link>
      <Spacer y={1} />
      <Link to="/Dashboard/ModulesInvesting">
        <Card isHoverable="true" isPressable="true">
          <Text h2> Investing </Text>
        </Card>
      </Link>
    </div>
  );
};

export default ModulesLanding;
