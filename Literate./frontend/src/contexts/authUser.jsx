import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
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
        setAuthState((state) => ({ ...state, isAuthenticated: false }));
      }
    };
    fetchUser();
  }, [authState.isAuthenticated]);

  //   const handleLogout = async () => {
  //     await apiClient.logoutUser();
  //     setAppState((state) => ({ ...state, user: {} }));
  //   };

  const passedProps = { authState, setAuthState };

  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

export { AuthorizeContext, AuthorizeProvider };
