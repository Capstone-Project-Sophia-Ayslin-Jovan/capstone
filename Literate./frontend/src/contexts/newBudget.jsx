import { AuthorizeContext } from "./authUser";
import { createContext, useState, useEffect, useContext } from "react";

// Create a new React context for managing "new budget" related data
const NewBudgetContext = createContext();

// NewBudgetProvider component manages and provides "new budget" related data to its children
const NewBudgetProvider = ({ children }) => {
  // Access authState from AuthorizeContext using the useContext hook
  const { authState } = useContext(AuthorizeContext);
  
  // State to hold "new budget" data
  const [newBudget, setNewBudget] = useState({
    userId: null,
    name: null,
    startDate: null,
    endDate: null,
    goal: null,
    budgetData: {},
  });

  useEffect(() => {
    // Update userId in newBudget state when authState.user.id changes
    if (authState.user?.id) {
      setNewBudget((prevNewBudget) => ({
        ...prevNewBudget,
        userId: authState.user.id,
      }));
    }
  }, [authState.user?.id]);
  
  // Create an object containing newBudget state and setNewBudget function
  const passedProps = { newBudget, setNewBudget };

  // Wrap children components with NewBudgetContext.Provider and provide context value
  return (
    <NewBudgetContext.Provider value={passedProps}>
      {children}
    </NewBudgetContext.Provider>
  );
};

// Export NewBudgetContext and NewBudgetProvider
export { NewBudgetContext, NewBudgetProvider };
