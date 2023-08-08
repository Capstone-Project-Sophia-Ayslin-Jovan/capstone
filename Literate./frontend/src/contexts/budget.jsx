import { createContext, useState, useEffect, useContext } from "react";
import apiClient from "../services/apiClient";
import { AuthorizeContext } from "./authUser";

// Create a new React context for managing budget-related data
const BudgetContext = createContext();

// BudgetProvider component manages and provides budget-related data to its children
const BudgetProvider = ({ children }) => {
  // Access authState from AuthorizeContext using the useContext hook
  const { authState } = useContext(AuthorizeContext);
  
  // State to hold budget data
  const [budget, setBudget] = useState({});
  
  console.log(authState.isAuthenticated);

  useEffect(() => {
    console.log("Entering budget useEffect");
    const fetchBudget = async () => {
      if (authState.isAuthenticated && authState.user?.id) {
        console.log("User is checked for authenticated here");
        
        // Fetch budget data from the server using the user's ID
        const { data } = await apiClient.getBudget(authState.user.id);
        console.log(authState.user);
        
        if (data !== null) {
          const { budget } = data;
          console.log(budget);
          
          if (budget !== null) {
            // Update budget state with relevant budget details
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
          // Set budget state to an empty object if no budget data is received
          setBudget({});
        }
      }
    };
    // Fetch budget data when component mounts or when budget.isUpdated changes
    fetchBudget();
  }, [authState.user, budget.isUpdated]);

  // Create an object containing budget state and setBudget function
  const passedProps = { budget, setBudget };

  // Wrap children components with BudgetContext.Provider and provide context value
  return (
    <BudgetContext.Provider value={passedProps}>
      {children}
    </BudgetContext.Provider>
  );
};

// Export BudgetContext and BudgetProvider
export { BudgetContext, BudgetProvider };
