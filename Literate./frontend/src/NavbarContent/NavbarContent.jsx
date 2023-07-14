"use client";

import React from "react";
import { useState } from "react";
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
import "./NavbarContent.css";

const NavbarContent = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Navbar variant={"sticky"}>
        <Navbar.Content>
          <Navbar.Brand className="logo">Literate.</Navbar.Brand>
          <Spacer x={3} />
          <Navbar.Link href="/">Home</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link href="#about">About</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link>Contact</Navbar.Link>
          <Spacer x={25} />
          <Button auto shadow onPress={handler}>
            Login
          </Button>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Login to
                <Text b size={18}>
                  <Spacer />
                  Literate.
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
              />
              <Row justify="space-between">
                <Checkbox>
                  <Text size={14}>Remember me</Text>
                </Checkbox>
                <Text size={14}>Forgot password?</Text>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandler}>
                Close
              </Button>
              <Button auto onPress={closeHandler}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>
          <Spacer x={5} />
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavbarContent;
