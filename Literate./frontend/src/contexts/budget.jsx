import { createContext, useState, useEffect, useContext } from "react";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "./authUser";

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const { authState } = useContext(AuthorizeContext);
  const [budget, setBudget] = useState({});
  console.log(authState.isAuthenticated);

  useEffect(() => {
    console.log("Entering budget useEffect");
    const fetchBudget = async () => {
      if (authState.isAuthenticated && authState.user?.id) {
        console.log("User is checked for authenticated here");
        const { data } = await apiClient.getBudget(authState.user.id);
        console.log(authState.user);
        if (data !== null) {
          const { budget } = data;
          console.log(budget);
          if (budget !== null) {
            setBudget({
              userId: authState.user?.id,
              id: budget.id,
              name: budget.name,
              startDate: budget.startDate.substring(0, 10),
              endDate: budget.endDate.substring(0, 10),
              goal: budget.goal,
              budgetData: budget.budgetData,
              isUpdated: false,
            });
          }
        } else {
          console.log("HERE");
          setBudget({});
        }
      }
    };
    fetchBudget();
  }, [authState.user, budget.isUpdated]);

  const passedProps = { budget, setBudget };

  return (
    <BudgetContext.Provider value={passedProps}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetContext, BudgetProvider };
