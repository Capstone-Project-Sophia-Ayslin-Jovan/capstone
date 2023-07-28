import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Profile } from "./pages/Profile/Profile";
import { AuthorizeProvider } from "./contexts/authUser";
import { BudgetProvider } from "./contexts/budget";
import { Home } from "./pages/Home/Home";
import Budget from "./pages/Budget/Budget";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import NotAuthRoute from "./components/NotAuthRoute/NotAuthRoute";

export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <AuthorizeProvider>
        <BudgetProvider>
          <App />
        </BudgetProvider>
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
  }
  return (
    <div className={styles.main}>
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route
            path="/"
            element={
              <NotAuthRoute>
                <Landing />
              </NotAuthRoute>
            }
          />
          <Route
            path="/Signup"
            element={
              <NotAuthRoute>
                <Signup />
              </NotAuthRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <AuthRoute>
                <Profile handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          />
          <Route
            path="/Budget"
            element={
              <AuthRoute>
                <Budget handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          />
          <Route
            path="/Home"
            element={
              <AuthRoute>
                <Home handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
