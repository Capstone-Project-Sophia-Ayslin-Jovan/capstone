"use client";

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Text,
  Input,
  Row,
  Col,
  Spacer,
  Container,
  Grid,
  Card,
} from "@nextui-org/react";
import Nav from "../../components/Nav/Nav";
import { AuthorizeContext } from "../../contexts/authUser";
import apiClient from "../../services/apiClient";
import Loading from "../Loading/Loading";
import "./Signup.css"

const Signup = () => {
  const { setAuthState } = useContext(AuthorizeContext);

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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail(email) {
    return emailRegex.test(email);
  }

  const handleOnInputChange = (event) => {
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
      if (!validateEmail(event.target.value)) {
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
      console.log(form);
      const { data } = await apiClient.signUp({
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (data) {
        localStorage.setItem("literate_token", data.userToken);
        setAuthState((state) => ({ ...state, isAuthenticated: true }));
        setIsLoading(false);
        navigate("/Dashboard");
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
  };
  console.log("something wrong with email:", errors.email);
  return (
    <>
      {isLoading ? (
        <div className="loading-card">
          <Loading />
        </div>
      ) : (
        <div>
          <Nav />
          <Container
            display="flex"
            alignItems="center"
            css={{ justifyContent: "center" }}
            // css={{
            //   backgroundImage: `url(https://logowik.com/content/uploads/images/piggy-bank8686.jpg)`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   backgroundAttachment: "fixed",
            //   backgroundSize: "cover",
            // }}
          >
            <Card className="card" css={{ width: "40vw" }}>
              <Card.Header
                css={{ textAlign: "center", justifyContent: "center" }}
              >
                <Text id="modal-title" size={30} textAlign="center">
                  Sign Up with Literate.
                </Text>
              </Card.Header>
              <Card.Divider></Card.Divider>
              <Card.Body>
                <Grid.Container gap={2} justify="center">
                  <Grid xs={12} md={6}>
                    <Input
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="First Name"
                      name="firstName"
                      aria-label="Input"
                      onChange={handleOnInputChange}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Input
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Last Name"
                      name="lastName"
                      aria-label="Input"
                      onChange={handleOnInputChange}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Input
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Username"
                      name="username"
                      aria-label="Input"
                      onChange={handleOnInputChange}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Input
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Email"
                      name="email"
                      aria-label="Input"
                      onChange={handleOnInputChange}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Input.Password
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Password"
                      name="password"
                      aria-label="Input"
                      onChange={handleOnInputChange}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Input.Password
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Confirm Password"
                      name="passwordConfirm"
                      aria-label="Input"
                      onChange={handleOnInputChange}
                    />
                  </Grid>
                  {errors.passwordConfirm ? (
                    <Text color="error">{errors.passwordConfirm}</Text>
                  ) : (
                    <Spacer y={1} />
                  )}
                  {errors.email ? (
                    <Text color="error">{errors.email}</Text>
                  ) : (
                    <Spacer y={1} />
                  )}
                  <Grid xs={12} justify="center">
                    <Button
                      auto
                      flat
                      onPress={handleOnSubmit}
                      css={{ width: "6vw" }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid.Container>
              </Card.Body>
            </Card>
          </Container>
        </div>
      )}
    </>
  );
};

export default Signup;
