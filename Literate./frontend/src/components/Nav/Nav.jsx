import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme,
  Spacer,
} from "@nextui-org/react";

import { Layout } from "../Layout/Layout";
import Login from "../../pages/Login/Login";
function Nav() {
  let location = useLocation();
  console.log(location, "location");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const collapseItems = [
    { name: "Home", pathname: "/" },
    { name: "About Us", pathname: "/About-Us" },
    { name: "Modules", pathname: "/Modules" },
    { name: "Contact Us", pathname: "/Contact-Us" },
  ];
  return (
    <Layout>
      <Navbar variant="sticky" css={{}}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Literate.
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link isActive={location.pathname === "/"} href="/">
            Home
          </Navbar.Link>
          <Navbar.Link
            isActive={location.pathname === "About-Us"}
            href="/About-Us"
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            isActive={location.pathname === "Modules"}
            href="/Modules"
          >
            Modules
          </Navbar.Link>
          <Navbar.Link
            isActive={location.pathname === "Contact-Us"}
            href="/Contact-Us"
          >
            Contact Us
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.pathname}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        <Navbar.Content>
          <Navbar.Item>
            <Login loginForm={loginForm} />
          </Navbar.Item>
          <Navbar.Item>
            <Button auto as={Link} href="/signup" css={{ width: "3vw" }}>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Spacer x={2} />
    </Layout>
  );
}

export default Nav;
