import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

const AuthorizeContext = createContext();

const AuthorizeProvider = ({ children }) => {
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
        }
      } else {
        console.log("FrontEnd: User Not Authenticated!");
        console.log(error, message);
        setAuthState((state) => ({ ...state, isAuthenticated: false }));
      }
    };
    fetchUser();
  }, [authState.isAuthenticated]);

  const handleLogout = async () => {
    localStorage.removeItem("literate_token");
    apiClient.setToken(null);
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  const passedProps = { authState, setAuthState, handleLogout };

  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
