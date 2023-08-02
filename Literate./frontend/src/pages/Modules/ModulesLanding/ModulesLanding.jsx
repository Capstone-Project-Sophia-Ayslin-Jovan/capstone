import React from "react";
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

const ModulesLanding = ({}) => {
  return (
    <div>
      <Text h1>Learning Modules</Text>
      <Spacer y={2} />
      <div className="modules-cards">
        <Collapse.Group>
          <Collapse title="Money Matters" bordered="true" shadow="true">
            <Text h4>
              Learn the fundamental principles, emphasizing the significance of
              building wealth through informed decisions, financial goals, and
              effective money management.
            </Text>
            <Link to="/Dashboard/Modules/Intro">
              <Button> Start Here</Button>
            </Link>
          </Collapse>
        </Collapse.Group>

        <Spacer y={1} />

        <Collapse.Group>
          <Collapse title="Financial Futurists" bordered="true" shadow="true">
            <Text h4>
              Learn the fundamental concepts crucial for financial independence,
              including creating a personal budget, tracking income and
              expenses, and making informed financial decisions.
            </Text>
            <Link to="/Dashboard/Modules/Budgeting">
              <Button> Start Here</Button>
            </Link>
          </Collapse>
        </Collapse.Group>

        <Spacer y={1} />

        <Collapse.Group>
          <Collapse title="Live to Save" bordered="true" shadow="true">
            <Text h4>
              Learn the significance of saving money, different types of saving
              goals, and creating an effective saving plan to build financial
              security through cultivating a saving habit and implementing
              practical strategies.
            </Text>
            <Link to="/Dashboard/Modules/Savings">
              <Button> Start Here</Button>
            </Link>
          </Collapse>
        </Collapse.Group>

        <Spacer y={1} />

        <Collapse.Group>
          <Collapse
            title="The Cash Chronicles"
            bordered="true"
            shadow="true"
          >
            <Text h4>
              Learn the fundamental concepts such as creditworthiness, credit
              scores, types of debt, and interest rates, providing knowledge for
              responsible borrowing decisions and building a strong credit
              profile.
            </Text>
            <Link to="/Dashboard/Modules/Credit">
              <Button> Start Here</Button>
            </Link>
          </Collapse>
        </Collapse.Group>

        <Spacer y={1} />

        <Collapse.Group>
          <Collapse title="From Pennies to Prosperity" bordered="true" shadow="true">
            <Text h4>
              Learn the vital role in building wealth and achieving financial
              goals, covering various investment options, risk and return
              considerations, and emphasizing the significance of starting early
              on the investment journey.
            </Text>
            <Link to="/Dashboard/Modules/Investing">
              <Button> Start Here</Button>
            </Link>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
};

export default ModulesLanding;
