import React, { useContext } from "react";
import { Button, Container, Row, Text, Spacer } from "@nextui-org/react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AuthorizeContext } from "../../contexts/authUser";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const Home = ({ handleToggle, isOpen }) => {
  const { logoutUser } = useContext(AuthorizeContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
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
      {/* <Pie data={data}></Pie> */}
    </div>
  );
};
