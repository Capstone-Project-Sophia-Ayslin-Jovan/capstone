import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext("");

const AuthorizeContextProvider = ({ props }) => {
  const [appState, setAppState] = useState({
    user: null,
    isAuthenticated: false,
  });

  useEffect(() => {});

  //   const handleLogout = async () => {
  //     await apiClient.logoutUser();
  //     setAppState((state) => ({ ...state, user: {} }));
  //   };

  const passedProps = { appState, setAppState };

  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

export default AuthorizeContextProvider;
export const useAuthContext = () => useContext(AuthContext);
