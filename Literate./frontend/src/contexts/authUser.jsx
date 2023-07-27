import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const AuthorizeContext = createContext();

const AuthorizeProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userToken = localStorage.getItem("literate_token");
      apiClient.setToken(userToken);

      if (userToken) {
        const { data, error, message } = await apiClient.fetchUserFromToken();
        console.log("Data Fetched From Token: ", data);

        if (data) {
          setAuthState((state) => ({
            ...state,
            user: data.user,
            isAuthenticated: true,
          }));
          setInitialized(true);
        } else {
          console.log("FrontEnd: User Not Authenticated!");
          setAuthState((state) => ({
            ...state,
            isAuthenticated: false,
          }));
          setInitialized(true);
          console.log(message);
          throw error;
        }
      } else {
        console.log("FrontEnd: No token detected!");
      }
    };
    fetchUser();
  }, [authState.isAuthenticated, initialized]);

  const logoutUser = async () => {
    localStorage.removeItem("literate_token");
    apiClient.setToken(null);
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  const passedProps = {
    authState,
    setAuthState,
    logoutUser,
    initialized,
    setInitialized,
  };

  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
