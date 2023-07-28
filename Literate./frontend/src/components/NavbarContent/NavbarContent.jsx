"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Navbar, Spacer, Image, Text } from "@nextui-org/react";
import "./NavbarContent.css";
import apiClient from "../../services/apiClient";
import Login from "../../pages/Login/Login";
// import Errors from "../../../../backend/src/utils/errors";
const NavbarContent = ({ appState, setAppState }) => {
  //usestates and variables
  const [visible, setVisible] = React.useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //useEffect checking if user is already logged in, if so will redirect to home page
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text h4>Literate.</Text>
      </Navbar.Brand>
      <Navbar.Content underlineHeight={"normal"}>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Spacer x={2} />
        <Navbar.Link href="#about">About</Navbar.Link>
        <Spacer x={2} />
        <Navbar.Link>Contact</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Login loginForm={loginForm} />
      </Navbar.Content>
    </Navbar>
  );
};
export default NavbarContent;
