import { Spacer, Button, Container, Col, Text } from "@nextui-org/react";
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div>
      <Container>
        {console.log(isOpen)}
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
            <Button>Overview</Button>
            <Spacer y={0.25} />
            <Button>Modules</Button>
            <Spacer y={1} />

            <Text size={18} h3>
              ACCOUNT
            </Text>
            <Button>Profile</Button>
            <Spacer y={0.25} />
            <Button>Budget</Button>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Sidebar;
