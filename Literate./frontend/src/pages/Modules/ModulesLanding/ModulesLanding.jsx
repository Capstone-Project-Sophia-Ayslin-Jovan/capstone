import React, { useState } from "react";
import {
  Navbar,
  Button,
  Spacer,
  Collapse,
  Text,
  Input,
  Row,
  Card,
  Container,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./ModulesLanding.css";

const ModulesLanding = () => {
  return (
    <div>
      <Text size={42} css={{ fontWeight: "$normal" }} h1>
        Learn with Literate.
      </Text>
      <div className="modules-cards">
        <Collapse.Group splitted>
          <Collapse title="Money Matters" bordered="true" shadow="true">
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Explore the art of budgeting, uncover the secrets of smart saving,
              and unravel the mysteries of debt management. From setting
              financial goals that align with your dreams to making informed
              investment decisions, this module will equip you with tools to
              make confident choices about your financial future.
            </Text>
            <Link to="/Dashboard/Modules/Intro">
              <Button size={"lg"} flat color={"success"}>
                Learn
              </Button>
            </Link>
          </Collapse>

          <Collapse title="Financial Futurists" bordered="true" shadow="true">
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Join us on a journey of financial enlightenment as we demystify
              concepts such as compound interest, emergency funds, and the power
              of mindful spending. Whether you're a student just embarking on
              your financial journey or an experienced professional seeking to
              enhance your financial prowess, "Mastering Your Finances" promises
              to lay the cornerstone for a lifetime of fiscal success.
            </Text>
            <Link to="/Dashboard/Modules/Budgeting">
              <Button size={"lg"} flat color={"success"}>
                Learn
              </Button>
            </Link>
          </Collapse>

          <Collapse title="Live to Save" bordered="true" shadow="true">
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Uncover the techniques to cut unnecessary expenses, create an
              effective budget, and establish an emergency fund that offers
              security during unforeseen circumstances. Gain insights into
              automating your savings and explore the various avenues to
              optimize your funds, including high-yield savings accounts,
              investments, and retirement planning.
            </Text>
            <Link to="/Dashboard/Modules/Savings">
              <Button size={"lg"} flat color={"success"}>
                Learn
              </Button>
            </Link>
          </Collapse>

          <Collapse title="The Cash Chronicles" bordered="true" shadow="true">
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Learn the fundamental concepts such as creditworthiness, credit
              scores, types of debt, and interest rates, providing knowledge for
              responsible borrowing decisions and building a strong credit
              profile.
            </Text>
            <Link to="/Dashboard/Modules/Credit">
              <Button size={"lg"} flat color={"success"}>
                Learn
              </Button>
            </Link>
          </Collapse>

          <Collapse
            title="From Pennies to Prosperity"
            bordered="true"
            shadow="true"
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Learn the vital role in building wealth and achieving financial
              goals, covering various investment options, risk and return
              considerations, and emphasizing the significance of starting early
              on the investment journey.
            </Text>
            <Link to="/Dashboard/Modules/Investing">
              <Button size={"lg"} flat color={"success"}>
                Learn
              </Button>
            </Link>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
};

export default ModulesLanding;
