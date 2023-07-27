import React, { useContext } from "react";
import {
  Button,
  Container,
  Row,
  Text,
  Spacer,
  Link,
  Card,
} from "@nextui-org/react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AuthorizeContext } from "../../contexts/authUser";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Header from "../../components/Header/Header";
ChartJS.register(ArcElement, Tooltip, Legend);

import { BudgetContext } from "../../contexts/budget";

export const Home = ({ handleToggle, isOpen }) => {
  const { logoutUser } = useContext(AuthorizeContext);
  const { budgetInfo } = useContext(BudgetContext);
  console.log(budgetInfo);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div>
      <div className="home-container">
        {/* <Header
        handleToggle={handleToggle}
        isOpen={isOpen}
        handleLogout={handleLogout}
      /> */}
        <Sidebar
          handleToggle={handleToggle}
          handleLogout={handleLogout}
          isOpen={isOpen}
        />
        {/* <div className="logout-btn">
        <Button auto ghost onPress={handleLogout}>
          Logout
        </Button>
      </div> */}
        <Container>
          <Row gap={1}>
            <Container>
              <Text className="app-title" size={"$2xl"} h2>
                Literate.
              </Text>
              <Spacer y={4} />
              <Text h2>We've got what you need.</Text>
              <Spacer y={2} />
              <Text h3>
                Check out our personal budget helper and start tracking your
                funds today!
              </Text>
              <Spacer y={2} />
              <div className="budget-stuff">
                <div className="info-blurb">
                  <Text size={24} h3>
                    With our budgeting tool you'll be able to:
                  </Text>
                  <Text size={21} p>
                    1. Be more cognizant of your spending.
                  </Text>
                  <Text size={21} p>
                    2. Know where your money is going.
                  </Text>
                  <Text size={21} p>
                    3. Become a better budgeter.
                  </Text>
                </div>
                <Spacer x={4} />
                <img
                  className="clipboard"
                  src="https://static.vecteezy.com/system/resources/previews/021/899/929/original/budget-management-icon-planner-personal-budget-and-family-budget-personal-financial-control-cash-flow-flat-illustration-vector.jpg"
                />
              </div>
              <Link href="/Budget">
                <Button size={"xl"} auto>
                  Start Budgeting
                </Button>
              </Link>
              <Spacer y={6} />
              <Text h3>
                Want to brush up on your financial knowledge? Check out our
                quick lessons about money management and spending.
              </Text>
              <img src="https://static.vecteezy.com/system/resources/previews/001/974/416/non_2x/financial-planning-investment-education-free-vector.jpg" />
              <Text size={24} p>
                Our adaptive learning platform customizes your experience,
                tailoring each module to suit your skill level and aspirations.
                Track your progress, earn achievements, and celebrate milestones
                along the way.
              </Text>
              <Link href="/Modules">
                <Button auto size={"xl"}>
                  Start Learning
                </Button>
              </Link>
            </Container>
          </Row>
        </Container>
      </div>
      <Spacer y={12} />
      <Footer />
    </div>
  );
};
