// Import necessary components and hooks from React and NextUI libraries
import { Spacer, Button, Container, Col, Text } from "@nextui-org/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import custom CSS styles for the sidebar
import { AuthorizeContext } from "../../contexts/authUser"; // Import the AuthorizeContext from a custom context

// Define the Sidebar component
const Sidebar = ({ isOpen, handleToggle, handleLogout }) => {
  // Use the useContext hook to access the context
  const { authState, logoutUser } = useContext(AuthorizeContext);
  const { user } = authState; // Extract user data from the context
  
  // Render the Sidebar component
  return (
    <div>
      <Container responsive="true">
        <Col>
          {/* Button to toggle the sidebar */}
          <button className="menu-toggle-btn" onClick={() => handleToggle()}>
            <img
              className="menu"
              src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            />
          </button>
          {/* Sidebar content */}
          <div
            className={isOpen ? "sidebaropen" : "sidebarclosed"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* User profile image */}
            <img
              className="profile"
              src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg"
            />
            <Spacer y={1} />
            {/* Display user's first name */}
            <Text size={18} h3>
              Hi, {user?.firstName}!
            </Text>
            {/* Navigation links */}
            <Link to={"/Dashboard"}>
              <Button>Home</Button>
            </Link>
            <Spacer y={0.25} />
            <Link to={"/Modules"}>
              <Button>Modules</Button>
            </Link>
            <Spacer y={1} />
            {/* Account section */}
            <Text size={18} h3>
              ACCOUNT
            </Text>
            <Link to={"/Profile"}>
              <Button>Profile</Button>
            </Link>
            <Spacer y={0.25} />
            <Link to={"/Budget"}>
              <Button>Budget</Button>
            </Link>
            <Spacer y={0.25} />
            {/* Logout button */}
            <Button ghost onPress={handleLogout}>
              Logout
            </Button>
          </div>
        </Col>
      </Container>
    </div>
  );
};

// Export the Sidebar component as the default export
export default Sidebar;
