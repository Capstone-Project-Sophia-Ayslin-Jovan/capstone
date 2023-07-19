import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
// import { AuthorizeContextProvider} from "./contexts/authUser";
import { Home } from "./pages/Home/Home";
import "./App.css";
import Budget from "./pages/Budget/Budget";
export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      {/* <AuthorizeContextProvider> */}
      <App />
      {/* </AuthorizeContextProvider> */}
    </NextUIProvider>
  );
}
function App() {
  //usestates and variables
  const [loggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [appState, setAppState] = useState({
    user: null,
    token: null,
    loggedIn: false,
  });
  //global handlers
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  //handler for checking if a user is logged in upon landing on different screens
  const checkLoggedIn = () => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };
  //handler for making sidebar pop in and out
  function handleToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Landing appState={appState} setAppState={setAppState} />}
          />
          <Route
            path="/Login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Home"
            element={
              <Home
                handleLogout={handleLogout}
                handleToggle={handleToggle}
                isOpen={isOpen}
              />
            }
          />
          <Route path="/Budget" element={<Budget/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
