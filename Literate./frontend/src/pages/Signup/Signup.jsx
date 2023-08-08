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
import "./Signup.css";

const Signup = () => {
  const { setAuthState } = useContext(AuthorizeContext);

  // React Router's navigation hook
  const navigate = useNavigate();

  // State for loading status and errors
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // State for form input fields
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // Regular expression to validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Function to validate email format
  function validateEmail(email) {
    return emailRegex.test(email);
  }

  // Handle input change for form fields
  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      // Check if passwords match for validation
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      // Check if passwords match for validation
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    // Validate email format
    if (event.target.name === "email") {
      if (!validateEmail(event.target.value)) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    // Update form state with input changes
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  // Handle form submission
  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    // Check if passwords match for validation
    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    try {
      // Call API to sign up
      const { data } = await apiClient.signUp({
        firstName: form.firstName,
        lastName: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (data) {
        // Store user token and set authentication state
        localStorage.setItem("literate_token", data.userToken);
        setAuthState((state) => ({ ...state, isAuthenticated: true }));
        setIsLoading(false);
        // Navigate to the dashboard
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

  return (
    <>
      {/* Conditionally render loading screen or signup form */}
      {isLoading ? (
        <div className="loading-card">
          <Loading />
        </div>
      ) : (
        <div>
          {/* Render navigation bar */}
          <Nav />
          <Container
            display="flex"
            alignItems="center"
            css={{ justifyContent: "center" }}
          >
            <Card className="card" css={{ width: "40vw" }}>
              <Card.Header css={{ textAlign: "center", justifyContent: "center" }}>
                {/* Render signup form header */}
                <Text id="modal-title" size={30} textAlign="center">
                  Sign Up with Literate.
                </Text>
              </Card.Header>
              <Card.Divider></Card.Divider>
              <Card.Body>
                {/* Render form input fields */}
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
                  {/* ... (similar Input components for other fields) */}
                  <Grid xs={12} justify="center">
                    {/* Render signup button */}
                    <Button auto onPress={handleOnSubmit} css={{ width: "6vw" }}>
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
