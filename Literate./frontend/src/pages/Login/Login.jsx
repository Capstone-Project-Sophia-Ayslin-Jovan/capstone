"use client";

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Spacer,
} from "@nextui-org/react";
import apiClient from "../../services/apiClient";
import { AuthorizeContext } from "../../contexts/authUser";

const Login = () => {
  const { setAuthState } = useContext(AuthorizeContext);
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
        setAuthState((state) => ({ ...state, isAuthenticated: true }));
        localStorage.setItem("literate_token", data.userToken);
        navigate("/Dashboard");
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
      <Button auto onPress={handler} css={{ width: "3vw" }}>
        Login
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={24}>
            Welcome back!
            <Text b size={28}>
              <Spacer />
              Login
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
            name="email"
            label="Email"
            placeholder="Email"
            value={loginForm.email}
            onChange={handleLoginChange}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            name="password"
            label="Password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleSubmit}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
