"use client";


import React from "react";
import { Spacer, Text, Button, Container, Row } from "@nextui-org/react";
import "./Landing.css";
import NavbarContent from "@/NavbarContent/NavbarContent";
import { useState } from "react";
// import { Link } from "react-router-dom"

export default function Landing() {
  const learnMore = () => {};
  return (
    <div>
      <NavbarContent />
      <Spacer y={8} />
      <Text size={"$6xl"}>Literate.</Text>
      <Spacer y={1} />
      <Text size={"$2xl"}>Smart Money, Bright Future</Text>
      <Spacer y={8} />
      <Container display="flex">
        <Row justify="space-between">
          <Button className="get-strt-btn" size="xl">
            Get Started
          </Button>
        </Row>
      </Container>
      <Spacer y={6} />
      <Button className="learn-more-btn" size="xl" light onPress={learnMore}>
        Learn More
      </Button>
      <Text h2>
        At Literate, we understand the financial challenges that college
        students face on a daily basis. That's why we've created an innovative
        app specifically designed to help you take control of your finances and
        build a solid foundation for a bright financial future. With Literate,
        managing your money becomes intuitive, educational, and empowering.
      </Text>
      <Spacer y={4} />
      <Text h2>
        Budgeting Made Easy: Creating and sticking to a budget can be
        overwhelming, especially for busy college students. With Literate,
        budgeting becomes a breeze. Our user-friendly interface allows you to
        effortlessly set up budgets tailored to your specific needs and goals.
        Track your income, set spending limits for different categories, and
        receive real-time updates on your financial progress. By keeping a close
        eye on your spending, you'll gain a better understanding of where your
        money goes and make informed decisions.
      </Text>
    </div>
  );
}
