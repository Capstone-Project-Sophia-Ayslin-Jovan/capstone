"use client";

import React from "react";
import { useState } from "react";
import { Navbar, Button, Spacer } from "@nextui-org/react";
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
        <Spacer x={2} />
        <Navbar.Brand className="logo">Literate.</Navbar.Brand>
        <Spacer x={2} />
        <Navbar.Content>
          <Navbar.Link>Home</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link>About</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link>Contact</Navbar.Link>
          <Spacer x={8} />
          <Button className="login-btn" auto ghost onPress={handler}>
            Login
          </Button>
          <Spacer x={5} />
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavbarContent;
