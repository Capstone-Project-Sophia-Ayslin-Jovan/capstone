"use client";

import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Spacer,
  Container,
} from "@nextui-org/react";
import NavbarContent from "../../components/NavbarContent/NavbarContent";
import apiClient from "../../../services/apiClient"

const Signup = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  return (
    <div>
      <NavbarContent />
      <Spacer />
      <div className="form">
        <Container>
          <Row>
            <Spacer x={6}/>
            <Input
              clearable
              bordered
              width="500px"
              color="primary"
              size="lg"
              placeholder="First Name"
            />
            <Spacer />
            <Input
              clearable
              bordered
              width="500px"
              color="primary"
              size="lg"
              placeholder="Last Name"
            />
          </Row>
        </Container>
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Username"
        />
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
        />
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
        />
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Confirm Password"
        />
        <Spacer />
      </div>
      <Button>Sign up</Button>
    </div>
  );
};

export default Signup;
