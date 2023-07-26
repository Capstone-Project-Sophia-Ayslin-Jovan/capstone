import { createContext, useState, useEffect, useContext } from "react";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "./authUser";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const { authState } = useContext(AuthorizeContext);
  const [budgetInfo, setBudgetInfo] = useState({});

  useEffect(() => {
    setBudgetInfo({
      userId: authState.user?.id,
      name: "",
      total: 0,
      budgetLeft: 0,
      budgetData: {},
      hasBudget: false,
    });
  }, [authState.isAuthenticated]);

  const passedProps = { budgetInfo, setBudgetInfo };

  return (
    <BudgetContext.Provider value={passedProps}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
