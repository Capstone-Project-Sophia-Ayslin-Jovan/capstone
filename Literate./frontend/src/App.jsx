import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizeProvider } from "./contexts/authUser";
import { BudgetProvider } from "./contexts/budget";
import {
  Landing,
  Login,
  Signup,
  Home,
  MSBudget,
  Profile,
  Dashboard,
  ExpenseTracking,
} from "./pages/index";
import { AuthRoute, NotAuthRoute } from "./components/index";
import ModulesLanding from "./pages/Modules/ModulesLanding/ModulesLanding";
import ModulesIntro from "./pages/Modules/ModulesIntro/ModulesIntro";
import ModulesBudgeting from "./pages/Modules/ModulesBudgeting/ModulesBudgeting";
import ModulesCredit from "./pages/Modules/ModulesCredit/ModulesCredit";
import ModulesInvesting from "./pages/Modules/ModulesInvesting/ModulesInvesting";
import ModulesSavings from "./pages/Modules/ModulesSavings/ModulesSavings";

export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <ChakraProvider>
        <AuthorizeProvider>
          <BudgetProvider>
            <App />
          </BudgetProvider>
        </AuthorizeProvider>
      </ChakraProvider>
    </NextUIProvider>
  );
}

function App() {
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
            path="/Dashboard/Profile"
            element={
              <AuthRoute>
                <Dashboard display={<Profile />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route path="/budget" element={<MSBudget></MSBudget>}></Route>
          {/* <Route
            path="/Budget"
            element={
              <AuthRoute>
                <Budget handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          /> */}
          {/* <Route
            path="/Home"
            element={
              <AuthRoute>
                <Home handleToggle={handleToggle} isOpen={isOpen} />
              </AuthRoute>
            }
          /> */}
          <Route
            path="/Dashboard"
            element={
              <AuthRoute>
                <Dashboard display={<Home />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Create-Budget"
            element={
              <AuthRoute>
                <Dashboard display={<MSBudget />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Modules"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesLanding />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/ModulesIntro"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesIntro />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/ModulesBudgeting"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesBudgeting />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/ModulesCredit"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesCredit />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/ModulesInvesting"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesInvesting />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/ModulesSavings"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesSavings/>}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Add-Expense"
            element={
              <AuthRoute>
                <Dashboard display={<ExpenseTracking />}></Dashboard>
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
