import { AuthorizeContext } from "./authUser";
import { createContext, useState, useEffect, useContext } from "react";

const NewBudgetContext = createContext();

const NewBudgetProvider = ({ children }) => {
  const { authState } = useContext(AuthorizeContext);
  const [newBudget, setNewBudget] = useState({
    userId: null,
    name: null,
    startDate: null,
    endDate: null,
    goal: null,
    budgetData: {},
  });

  useEffect(() => {
    if (authState.user?.id) {
      setNewBudget((prevNewBudget) => ({
        ...prevNewBudget,
        userId: authState.user.id,
      }));
    }
  }, [authState.user?.id, newBudget]);
  const passedProps = { newBudget, setNewBudget };

  return (
    <NewBudgetContext.Provider value={passedProps}>
      {children}
    </NewBudgetContext.Provider>
  );
};

export { NewBudgetContext, NewBudgetProvider };
