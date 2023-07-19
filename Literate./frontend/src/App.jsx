import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { AuthorizeProvider } from "./contexts/authUser";
import { Home } from "./pages/Home/Home";
import "./App.css";
import Budget from "./pages/Budget/Budget";
export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <AuthorizeProvider>
        <App />
      </AuthorizeProvider>
    </NextUIProvider>
  );
}
function App() {
  //usestates and variables
  const [isOpen, setIsOpen] = useState(false);
  //handler for making sidebar pop in and out
  function handleToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Home"
            element={<Home handleToggle={handleToggle} isOpen={isOpen} />}
          />
          <Route path="/Budget" element={<Budget />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
