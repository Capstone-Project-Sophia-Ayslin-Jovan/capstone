import { createContext, useState, useEffect } from "react";
import apiClient from "../services/apiClient";

// Create a new context for managing authorization state
const AuthorizeContext = createContext();

// Component to provide authorization context to child components
const AuthorizeProvider = ({ children }) => {
  // State to track initialization and authorization
  const [initialized, setInitialized] = useState(false);
  const [authState, setAuthState] = useState({
    user: null,                 // User object
    isAuthenticated: false,    // Flag to indicate if user is authenticated
  });

  useEffect(() => {
    // Function to fetch user data based on token
    const fetchUser = async () => {
      // Retrieve user token from local storage
      const userToken = localStorage.getItem("literate_token");
      // Set token for API client
      apiClient.setToken(userToken);

      if (userToken) {
        // Fetch user data using token
        const { data, error, message } = await apiClient.fetchUserFromToken();
        if (data) {
          // Update authorization state if user is authenticated
          setAuthState((state) => ({
            ...state,
            user: data.user,
            isAuthenticated: true,
          }));
          setInitialized(true);
        } else {
          // Handle case where user is not authenticated
          setAuthState((state) => ({
            ...state,
            isAuthenticated: false,
          }));
          setInitialized(true);
          throw error;
        }
      } else {
        // Handle case where no token is detected
        setInitialized(true);
      }
    };
    fetchUser();
  }, [authState.isAuthenticated]);
  // Note: 'initialized' is removed from dependencies to prevent infinite loop

  // Function to log out user
  const logoutUser = async () => {
    // Remove token from local storage and reset API client token
    localStorage.removeItem("literate_token");
    apiClient.setToken(null);
    // Reset authorization state
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  // Props to be passed down to components
  const passedProps = {
    authState,
    setAuthState,
    logoutUser,
    initialized,
    setInitialized,
  };

  // Provide context value to child components
  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

// Export the authorization context and provider for usage
export { AuthorizeContext, AuthorizeProvider };
