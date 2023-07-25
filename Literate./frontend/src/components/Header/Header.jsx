import React from "react";
import "./Header.css";
import { Container, Spacer, Button, Row } from "@nextui-org/react";
import Sidebar from "../Sidebar/Sidebar";
const Header = ({ isOpen, handleToggle, handleLogout }) => {
  return (
    <div>
      <Container>
        <Row>
          <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
          <Spacer x={32} />
          <div className="logout-btn">
            <Button auto ghost onPress={handleLogout}>
              Logout
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
