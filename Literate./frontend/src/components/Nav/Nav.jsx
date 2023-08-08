// Import necessary React components and hooks
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
// Import components and styles from NextUI library
import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme,
  Spacer,
} from "@nextui-org/react";
// Import the Layout component
import { Layout } from "../Layout/Layout";
// Import the Login component
import Login from "../../pages/Login/Login";

// Define the Nav component
function Nav() {
  // Get the current location using the useLocation hook
  let location = useLocation();
  // Set up state for login form data
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  // Define navigation items for collapse
  const collapseItems = [
    { name: "Home", pathname: "/" },
    { name: "About Us", pathname: "/About-Us" },
    { name: "Modules", pathname: "/Modules" },
    { name: "Contact Us", pathname: "/Contact-Us" },
  ];
  
  // Render the Nav component
  return (
    <Layout>
      {/* Navbar component */}
      <Navbar variant="sticky">
        {/* Navbar toggle for small screens */}
        <Navbar.Toggle showIn="xs" />
        {/* Navbar brand/logo */}
        <Navbar.Brand>
          <Link href="/">
            <Text b color="black" hideIn="xs">
              Literate.
            </Text>
          </Link>
        </Navbar.Brand>
        {/* Navbar content */}
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          {/* Navigation links */}
          <Navbar.Link isActive={location.pathname === "/"} href="/">
            Home
          </Navbar.Link>
          <Navbar.Link
            isActive={location.pathname === "/About-Us"}
            href="/About-Us"
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            isActive={location.pathname === "/Modules"}
            href="/Modules"
          >
            Modules
          </Navbar.Link>
          <Navbar.Link
            isActive={location.pathname === "/Contact-Us"}
            href="/Contact-Us"
          >
            Contact Us
          </Navbar.Link>
        </Navbar.Content>
        {/* Navbar collapse for smaller screens */}
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              {/* Render collapse navigation items */}
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
        {/* Additional Navbar content */}
        <Navbar.Content>
          {/* Login component */}
          <Navbar.Item>
            <Login loginForm={loginForm} />
          </Navbar.Item>
          {/* Sign Up button */}
          <Navbar.Item>
            <Button
              auto
              ghost
              as={Link}
              href="/signup"
              css={{ minWidth: "6vw" }}
            >
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Spacer for layout */}
      <Spacer x={2} />
    </Layout>
  );
}

// Export the Nav component as the default export
export default Nav;
