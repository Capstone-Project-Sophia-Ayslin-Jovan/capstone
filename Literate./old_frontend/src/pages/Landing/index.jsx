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
// import { Link } from "react-router-dom"
export default function Landing() {
  const learnMore = () => {};
  return (
    <div>
      <NavbarContent />
      <div>
        {/* the app title and slogan */}
        <Container>
          <Row gap={1}>
            <Container>
              <Text size={"$7xl"} style={{ marginBottom: 0 }}>
                Literate.
              </Text>
              <Text size={"$2xl"}>Smart Money, Bright Future</Text>
            </Container>
            <img src="https://static.vecteezy.com/system/resources/previews/002/884/391/original/illustration-of-saving-money-in-the-household-sector-for-investment-spending-and-daily-life-vector.jpg" />
          </Row>
        </Container>
        <Spacer y={6} />
        <div className="get-strt-btn">
          <Button size="xl">Get Started</Button>
        </div>
      </div>
      <Spacer y={8} />
      <div>
        <h1>What We Offer</h1>
        <div className="card-container">
          <Spacer y={4} />
          <div className="info-card">
            <div>
              <Text h3>Budgeting Made Easy</Text>
            </div>
            <Text p size={18}>
              Track your income, set spending limits for different categories,
              and make real-time updates on your financial progress. By keeping
              a close eye on your spending, you'll gain a better understanding
              of where your money goes and make informed decisions.
            </Text>
          </div>
          <Spacer x={1} />
          <Card className="info-card">
            <Card.Header>
              <Text h3>Expense Tracking at Your Fingertips</Text>
            </Card.Header>
            <Card.Body>
              <Text p size={18}>
                Go beyond simple budgeting and expand your expense tracking
                capabilities. Literate allows you to effortlessly log and
                categorize your expenses, providing you with a clear overview of
                your spending habits.
              </Text>
            </Card.Body>
          </Card>
          <Spacer x={1} />
        </div>
        <Card className="info-card">
          <Card.Header>
            <Text h3>Financial Education, Simplified</Text>
          </Card.Header>
          <Card.Body>
            <Text size={18}>
              Allow us to be your personal financial tutor. From budgeting
              basics to credit card management and savings strategies, you'll
              gain valuable insights and practical knowledge.
            </Text>
          </Card.Body>
        </Card>{" "}
      </div>
      <Spacer y={8} />
      <div className="about">
        <div className="about-blurb">
          <h1 id="about">Our Mission</h1>
          <Text p size={24}>
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
