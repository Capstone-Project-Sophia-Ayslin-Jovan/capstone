import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorizeProvider } from "./contexts/authUser";
import { BudgetProvider } from "./contexts/budget";
import { NewBudgetProvider } from "./contexts/newBudget";
import {
  Landing,
  Login,
  Signup,
  Home,
  MSBudget,
  Profile,
  Dashboard,
  ExpenseTracking,
  Contact,
  About,
  ModulesHome,
} from "./pages/index";
import { AuthRoute, NotAuthRoute } from "./components/index";
import ModulesLanding from "./pages/Modules/ModulesLanding/ModulesLanding";
import ModulesIntro from "./pages/Modules/ModulesIntro/ModulesIntro";
import ModulesBudgeting from "./pages/Modules/ModulesBudgeting/ModulesBudgeting";
import ModulesCredit from "./pages/Modules/ModulesCredit/ModulesCredit";
import ModulesInvesting from "./pages/Modules/ModulesInvesting/ModulesInvesting";
import ModulesSavings from "./pages/Modules/ModulesSavings/ModulesSavings";

export default function AppContainer() {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          overflow: "auto !important", //To fix bug
        },
      },
    },
  });
  return (
    <NextUIProvider>
      <ChakraProvider theme={theme}>
        <AuthorizeProvider>
          <BudgetProvider>
            <NewBudgetProvider>
              <App />
            </NewBudgetProvider>
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
          <Route
            path="/Contact-Us"
            element={
              <NotAuthRoute>
                <Contact />
              </NotAuthRoute>
            }
          />
          <Route
            path="/About-Us"
            element={
              <NotAuthRoute>
                <About />
              </NotAuthRoute>
            }
          />
          <Route
            path="/Modules"
            element={
              <NotAuthRoute>
                <ModulesHome />
              </NotAuthRoute>
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
            path="/Dashboard/Modules/Intro"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesIntro />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Modules/Budgeting"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesBudgeting />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Modules/Credit"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesCredit />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Modules/Investing"
            element={
              <AuthRoute>
                <Dashboard display={<ModulesInvesting />}></Dashboard>
              </AuthRoute>
            }
          />
          <Route
            path="/Dashboard/Modules/Savings"
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
