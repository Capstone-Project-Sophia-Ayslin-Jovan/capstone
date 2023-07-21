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
import NavbarContent from "../../components/NavbarContent/NavbarContent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Pie } from "react-chartjs-2";
export default function Landing({ appState, setAppState }) {
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
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
  const learnMore = () => {};
  return (
    <div>
      <NavbarContent appState={appState} setAppState={setAppState} />
      <div>
        <Spacer y={6} />
        <Container>
          <Row gap={1}>
            <Container>
              <Text size={"$8xl"} style={{ marginBottom: 0 }}>
                Literate.
              </Text>
              <Text size={"$2xl"}>Smart Money, Bright Future</Text>
            </Container>
            <img src="https://static.vecteezy.com/system/resources/previews/002/884/391/original/illustration-of-saving-money-in-the-household-sector-for-investment-spending-and-daily-life-vector.jpg" />
          </Row>
        </Container>
        <Spacer y={6} />
      </div>
      <div>
        <h1>What We Offer</h1>
        <Spacer y={4} />
        <div className="container1">
          <Spacer y={4} />
          <div className="info-card">
            <div>
              <Text h2>Budgeting Made Easy</Text>
            </div>
            <Text size={24}>
              Track your income, set spending limits for different categories,
              and make real-time updates on your financial progress. By keeping
              a close eye on your spending, you'll gain a better understanding
              of where your money goes and make informed decisions.
            </Text>
            <Spacer y={2} />
            <Text h3>
              Interested in being able to manage your money better? Become a
              budgeting pro at the click of a button!
            </Text>
            <Spacer y={2} />
            <div className="get-strt-btn">
              <Link to="/signup">
                <Button bordered ghost rounded size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="ex-graph">
            <Pie data={data} />
          </div>
        </div>
        <div className="info-card">
          <Text h2>Expense Tracking at Your Fingertips</Text>
          <Text size={24}>
            Go beyond simple budgeting and expand your expense tracking
            capabilities. Literate allows you to effortlessly log and categorize
            your expenses, providing you with a clear overview of your spending
            habits.
          </Text>
        </div>
        <Spacer x={1} />
        <div className="info-card">
          <Text h2>Financial Education, Simplified</Text>
          <Text size={24}>
            Allow us to be your personal financial tutor. From budgeting basics
            to credit card management and savings strategies, you'll gain
            valuable insights and practical knowledge.
          </Text>
        </div>
        <Spacer y={4} />
      </div>
      <Spacer y={8} />
      <div className="about">
        <div className="about-blurb">
          <h1 id="about">Our Mission</h1>
          <Text size={24}>
            Our mission is to provide college students with the tools,
            knowledge, and guidance they need to navigate the complexities of
            personal finance. We aim to empower students to create budgets,
            track their expenses, and develop healthy financial habits that will
            serve them well beyond their college years. With Literate, we want
            to equip students with the essential money management skills they
            need to thrive academically and financially.
          </Text>
        </div>
        <img
          className="piggy"
          src="https://static.vecteezy.com/system/resources/previews/017/559/133/non_2x/pig-money-box-icon-outline-illustration-vector.jpg"
        />
      </div>
    </div>
  );
}
