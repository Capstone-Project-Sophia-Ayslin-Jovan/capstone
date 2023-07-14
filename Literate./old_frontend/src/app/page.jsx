"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import NavbarContent from "../components/NavbarContent/NavbarContent";

export default function Home() {
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
