import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import "./App.css";

export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <App />
    </NextUIProvider>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/Login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
