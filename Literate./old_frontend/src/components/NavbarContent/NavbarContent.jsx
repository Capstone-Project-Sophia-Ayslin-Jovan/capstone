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
        <Navbar.Content>
          <Navbar.Brand className="logo">Literate.</Navbar.Brand>
          <Spacer x={3} />
          <Navbar.Link href="/">Home</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link href="#about">About</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link>Contact</Navbar.Link>
          <Spacer x={25} />
          <Button className="login-btn" auto ghost onClick={handler}>
            Login
          </Button>
          <Spacer x={5} />
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavbarContent;
