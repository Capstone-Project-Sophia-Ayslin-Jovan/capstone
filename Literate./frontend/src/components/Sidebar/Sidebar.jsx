import { Spacer, Button, Container, Col, Text } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div>
      <Container responsive="true">
        <Col>
          <div
            className={isOpen ? "sidebaropen" : "sidebarclosed"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: 30,
              alignItems: "center",
            }}
          >
            <Text size={18} h3>
              Hi, User's firstname!
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
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Sidebar;
