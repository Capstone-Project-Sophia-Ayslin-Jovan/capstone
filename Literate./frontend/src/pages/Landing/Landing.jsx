"use client";
import React from "react";
import {
  Spacer,
  Text,
  Button,
  Container,
  Row,
  Card,
  Grid,
} from "@nextui-org/react";
import "./Landing.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Doughnut, Pie } from "react-chartjs-2";
export default function Landing({ appState, setAppState }) {
  const navigate = useNavigate();
  const learnMore = () => {
    navigate("/About-Us");
  };
  const data = {
    labels: [
      "Essentials",
      "Housing, Utilites, & Bills",
      "Transportation",
      "Recreation",
    ],
    datasets: [
      {
        label: "$ for the month",
        data: [120, 600, 90, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Nav appState={appState} setAppState={setAppState} />
      <Spacer y={6} />

      <Container responsive="true">
        <Row gap={1}>
          <Container responsive="true">
            <Text size={"$8xl"} style={{ marginBottom: 0 }}>
              Literate.
            </Text>
            <Text size={"$2xl"}>Smart Money, Bright Future</Text>
          </Container>
          <img src="https://img.freepik.com/free-vector/tiny-students-sitting-near-books-getting-university-degree-paying-money-education-business-flat-vector-illustration-college-scholarship-finance-system-school-fee-economy-student-loan-concept_74855-21037.jpg?w=2000&t=st=1690861950~exp=1690862550~hmac=99af581cf1a764d5638d3e94211f73e0c6501665816a853ce03089cf4b8200ad" />
        </Row>
      </Container>
      <Spacer y={2} />
      <Container responsive="true">
        <h2>
          Becoming financially literate is hard. That's why we've made it easy.
        </h2>
        <Spacer y={8} />
        <div className="container">
          <div className="info-card">
            <div>
              <Text h2>Budgeting Made Easy</Text>
            </div>
            <Text size={24}>
              Track your income, set spending limits for different categories,
              and make real-time updates on your financial progress. By keeping
              a close eye on your spending, you'll gain a better understanding
              of where your money goes and make better informed decisions.
            </Text>
            <Spacer y={2} />
            <Text h3>
              Interested in being able to manage your money better? Become a
              budgeting pro today!
            </Text>
            <Spacer y={2} />
            <div className="get-strt-btn">
              <Link to="/signup">
                <Button bordered ghost rounded size="xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="ex-graph">
            <Doughnut data={data} />
          </div>
        </div>
        <Spacer y={6} />
        <div className="container">
          <img
            className="expense-pic"
            src="https://img.freepik.com/free-vector/salary-gap-male-female-business-characters_74855-19874.jpg?w=2000&t=st=1690860830~exp=1690861430~hmac=55c0723d6ee73830ce652595c1a118fe5dead6c9dc2121e868a4ee94ecaafbf4"
          ></img>
          <div className="info-card2">
            <Text h2>Expense Tracking at Your Fingertips</Text>
            <Text size={24}>
              Go beyond simple budgeting and expand your expense tracking
              capabilities. Literate allows you to effortlessly log and
              categorize your expenses, providing you with a clear overview of
              your spending habits.
            </Text>
          </div>
        </div>
        <Spacer y={4} />
        <div className="container">
          <div className="info-card">
            <Text h2>Financial Education, Simplified</Text>
            <Text size={24}>
              From budgeting basics to credit card management and savings
              strategies, you'll gain valuable insights and practical knowledge.
            </Text>
            <Spacer y={2} />
            <Link to="/About">
              <Button
                rounded
                ghost
                color={"success"}
                size={"xl"}
                onPress={learnMore}
              >
                Learn More
              </Button>
            </Link>
          </div>{" "}
          <img
            className="piggy"
            src="https://img.freepik.com/free-vector/piggy-bank-concept-illustration_114360-5612.jpg?w=1800&t=st=1690862781~exp=1690863381~hmac=73e7344fe8e770c8c94a3f79af8a34c2e13c0a44c88cba336d346f21d9f76f0d"
          />
        </div>
        <Spacer y={4} />

        <Container responsive="true">
          <div className="about-blurb">
            <h1 id="about">Our Mission</h1>
            <Text size={24}>
              We look to provide the financially untrained with the tools,
              knowledge, and guidance they need to navigate the complexities of
              personal finance. We aim to empower students to create budgets,
              track their expenses, and develop healthy financial habits that
              will serve them well beyond their college years. With Literate, we
              want to equip students with the essential money management skills
              they need to thrive academically and financially.
            </Text>
          </div>
        </Container>
      </Container>
      <Spacer y={6} />
      <Footer />
    </>
  );
}
