import { createContext, useState, useEffect, useContext } from "react";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "./authUser";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const { authState } = useContext(AuthorizeContext);
  const [budget, setBudget] = useState({});

  useEffect(() => {
    const fetchBudget = async () => {
      if (authState.isAuthenticated) {
        const { data } = await apiClient.getBudget(authState.user.id);
        const { budget } = data;
        console.log(data);
        if (budget !== null) {
          console.log(budget);
          setBudget({
            userId: authState.user?.id,
            name: budget.name,
            startDate: budget.startDate.substring(0, 10),
            endDate: budget.endDate.substring(0, 10),
            goal: budget.goal,
            budgetData: budget.budgetData,
          });
        }
      }
    };
    fetchBudget();
  }, [authState.isAuthenticated]);

  const passedProps = { budget, setBudget };

  return (
    <BudgetContext.Provider value={passedProps}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
