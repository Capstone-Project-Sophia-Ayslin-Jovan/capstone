"use client";

import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Spacer,
} from "@nextui-org/react";
import "./NavbarContent.css";

const NavbarContent = () => {
  return (
    <div>
      <Navbar isBordered variant={"sticky"}>
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
          <Button auto ghost>
            Login
          </Button>
          <Spacer x={5} />
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default NavbarContent;
