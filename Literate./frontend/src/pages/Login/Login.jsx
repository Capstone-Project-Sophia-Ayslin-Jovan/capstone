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
import Loading from "../Loading/Loading";
import "./Login.css"

const Login = () => {
  const { setAuthState } = useContext(AuthorizeContext);
  const [visible, setVisible] = React.useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handler functions for opening/closing login form
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  // Handler for taking in inputs for the login form
  const handleLoginChange = (e) => {
    // Validation for email format
    if (e.target.name === "Email") {
      if (e.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }
    setLoginForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  };

  // Handler for submission of login form
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

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
        console.log("loginForm:", loginForm);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        loginForm: message ? String(message) : String(err),
      }));
      setIsLoading; // This seems to be missing the value to set
    }
  };

  return (
    <div>
      <Button auto onPress={handler} css={{ minWidth: "6vw" }}>
        Login
      </Button>
      {isLoading ? (
        <Modal
          css={{ height: 150 }}
          aria-labelledby="modal-title"
          open={visible}
        >
          <div className="loading-card">
            <Loading />
          </div>
        </Modal>
      ) : (
        <div>
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
              {errors && (
                <Text
                  color="warning"
                  size={18}
                  css={{ fontWeight: "$normal" }}
                  h2
                >
                  {errors.email}
                </Text>
              )}
              <Input
                clearable
                isRequired
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
                isRequired
                bordered
                fullWidth
                color="primary"
                size="lg"
                name="password"
                label="Password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleLoginChange}
                onKeyUp={handleKeyPress}
              />
            </Modal.Body>
            {errors.loginForm ? (
              <Text color="error">{errors.loginForm}</Text>
            ) : (
              <></>
            )}
            <Text>Don't have an account?</Text>
            <Link to={"/Signup"}>
              <Text color="primary">Sign up here!</Text>
            </Link>
            <Modal.Footer>
              <Button auto flat color="error" onPress={closeHandler}>
                Close
              </Button>
              <Button auto onPress={handleSubmit} onKeyDown={handleSubmit}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Login;
