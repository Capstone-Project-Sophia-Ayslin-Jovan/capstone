"use client";

import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Spacer,
  Container,
} from "@nextui-org/react";
import NavbarContent from "../../components/NavbarContent/NavbarContent";
import apiClient from "../../services/apiClient";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    console.log(event.target.name)
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    try {
      const { data } = await apiClient.signUp({
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (data) {
        // setAppState((s) => ({ ...s, user: data.user, isAuthenticated: true }))
        localStorage.setItem("Literate_token", data.token)

        setIsLoading(false);
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with registration",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
    // navigate("/")
    
  };

  return (
    <div>
      <NavbarContent />
      <Spacer />
      <Text id="modal-title" size={18}>
        Sign up with
        <Text b size={30}>
          <Spacer />
          Literate.
        </Text>
      </Text>
      <div className="form">
        <Container>
          <Row>
            <Spacer x={7.5} />
            <Input
              clearable
              bordered
              width="500px"
              color="primary"
              size="lg"
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleOnInputChange}
            />
            <Spacer />
            <Input
              clearable
              bordered
              width="500px"
              color="primary"
              size="lg"
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleOnInputChange}
            />
          </Row>
        </Container>
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={handleOnInputChange}
        />
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleOnInputChange}
        />
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleOnInputChange}
        />
        <Spacer />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleOnInputChange}
        />
        <Spacer />
      </div>
      <Button onPress={handleOnSubmit} disabled={isLoading}>
        Sign up
      </Button>
    </div>
  );
};

export default Signup;
