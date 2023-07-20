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

  //handler functions for opening/closing login form
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  //handler for taking in inputs for the login form
  const handleLoginChange = (e) => {
    if (e.target.name === "Email") {
      if (e.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }
    setLoginForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };
  //handler for submission of login form
  const handleSubmit = async (event) => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, loginForm: null }));
    try {
      const { data, error, message } = await apiClient.login(loginForm);
      if (error) {
        setErrors((e) => ({ ...e, loginForm: String(message) }));
        setIsLoading(false);
        return;
      }
      if (data) {
        setAppState((s) => ({ ...s, loggedIn: true }));
        localStorage.setItem("token", data.token);
        navigate("/Home");
      } else {
        setErrors((e) => ({
          ...e,
          loginForm: "Invalid username/password combination",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        loginForm: message ? String(message) : String(err),
      }));
      setIsLoading;
    }
  };
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
          <Spacer x={25} />
          <Login loginForm={loginForm} />
        </Navbar.Content>
        <Spacer x={24} />
      </Navbar>
    </div>
  );
};
export default NavbarContent;
