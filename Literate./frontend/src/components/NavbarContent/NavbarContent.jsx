"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
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
    <div>
      <Navbar variant="floating">
        <Navbar.Content>
          <Navbar.Brand className="logo">Literate.</Navbar.Brand>
          <Spacer x={3} />
          <Navbar.Link href="/">Home</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link href="#about">About</Navbar.Link>
          <Spacer x={3} />
          <Navbar.Link>Contact</Navbar.Link>

          <Spacer x={24} />
          <div>
            <Spacer y={1} />
            <Login loginForm={loginForm} />
          </div>

        </Navbar.Content>
        <Spacer x={24} />
      </Navbar>
    </div>
  );
};
export default NavbarContent;
