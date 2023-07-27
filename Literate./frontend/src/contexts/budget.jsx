import { createContext, useState, useEffect, useContext } from "react";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "./authUser";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const { authState, initialized } = useContext(AuthorizeContext);
  const [budgetInfo, setBudgetInfo] = useState({});

  useEffect(() => {
    console.log(authState);
    const fetchBudget = async () => {
      if (authState.isAuthenticated && authState.user.currBudgetId !== null) {
        const budgetData = await apiClient.getBudget(
          authState.user.currBudgetId
        );
        if (budgetData.data !== null) {
          setBudgetInfo({
            userId: authState.user?.id,
            name: budgetData.data.name,
            startDate: budgetData.data.startDate,
            endDate: budgetData.data.endDate,
            total: budgetData.data.total,
            budgetLeft: 0,
            budgetData: budgetData.data.budgetData,
            hasBudget: true,
          });
        } else {
          console.log("Curr Budget Id is wrong: ", authState.user.currBudgetId);
        }
      } else {
        setBudgetInfo({
          userId: authState.user?.id,
          name: "",
          total: 0,
          budgetLeft: 0,
          budgetData: {},
          hasBudget: false,
        });
      }
    };
    fetchBudget();
  }, [authState.isAuthenticated, budgetInfo.hasBudget]);

  const passedProps = { budgetInfo, setBudgetInfo };

  return (
    <BudgetContext.Provider value={passedProps}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
