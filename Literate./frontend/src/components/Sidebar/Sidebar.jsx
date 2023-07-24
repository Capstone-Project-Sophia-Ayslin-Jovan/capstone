import { Spacer, Button, Container, Col, Text } from "@nextui-org/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { AuthorizeContext } from "../../contexts/authUser";
const Sidebar = ({ isOpen, handleToggle, handleLogout }) => {
  const { authState, logoutUser } = useContext(AuthorizeContext);
  const { user } = authState;
  return (
    <div>
      <Container>
        {console.log(isOpen)}
        <Col>
          <button className="menu-toggle-btn" onClick={() => handleToggle()}>
            <img
              className="menu"
              src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            />
          </button>
          <div
            className={isOpen ? "sidebaropen" : "sidebarclosed"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              className="profile"
              src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg"
            />
            <Spacer y={1} />
            <Text size={18} h3>
              Hi, {user?.firstName}!
            </Text>
            <Link to={"/Home"}>
              <Button>Home</Button>
            </Link>
            <Spacer y={0.25} />
            <Link to={"/Modules"}>
              <Button>Modules</Button>
            </Link>
            <Spacer y={1} />
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
            <Button ghost onPress={handleLogout}>
              Logout
            </Button>
          </div>
        </Col>
      </Container>
    </div>
  );
};
export default Sidebar;
