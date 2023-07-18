import React from "react";
import { Button, Container, Row, Text, Spacer } from "@nextui-org/react";
import "./Home.css";
import Sidebar from "../../components/NavbarContent/Sidebar/Sidebar";
export const Home = ({ handleLogout, handleToggle, isOpen }) => {
  return (
    <div>
      <Container>
        <Row>
          <Button
            light
            className="menu-toggle-btn"
            onPress={() => handleToggle()}
          >
            <img
              className="menu"
              src="https://www.svgrepo.com/show/506800/burger-menu.svg"
            />
          </Button>
          <Spacer x={32} />
          <div className="logout-btn">
            <Button auto ghost onPress={handleLogout}>
              Logout
            </Button>
          </div>
        </Row>
      </Container>
      {console.log(isOpen)}
      <Sidebar isOpen={isOpen} />
      {/* </div> */}
      <Spacer y={6} />
      <Container>
        <Row gap={1}>
          <Container>
            <Text size={"$6xl"} style={{ marginBottom: 0 }}>
              Literate.
            </Text>
            <Text size={"$xl"}>Smart Money, Bright Future</Text>
          </Container>
          <img src="https://static.vecteezy.com/system/resources/previews/002/884/391/original/illustration-of-saving-money-in-the-household-sector-for-investment-spending-and-daily-life-vector.jpg" />
        </Row>
      </Container>
    </div>
  );
};
