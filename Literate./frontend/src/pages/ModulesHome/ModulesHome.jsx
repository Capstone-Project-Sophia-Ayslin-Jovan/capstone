import React from "react";
import { Container, Collapse, Text, Spacer } from "@nextui-org/react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./ModulesHome.css";
const ModulesHome = ({ appState, setAppState }) => {
  return (
    <div>
      <Nav appState={appState} setAppState={setAppState} />
      <Container>
        <Collapse.Group splitted>
          <Collapse
            shadow
            title="Money Matters"
            css={{ backgroundColor: "#65A838", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Explore the art of budgeting, uncover the secrets of smart saving,
              and unravel the mysteries of debt management. From setting
              financial goals that align with your dreams to making informed
              investment decisions, this module will equip you with tools to
              make confident choices about your financial future.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="Financial Futurists"
            css={{ backgroundColor: "#166417", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Join us on a journey of financial enlightenment as we demystify
              concepts such as compound interest, emergency funds, and the power
              of mindful spending. Whether you're a student just embarking on
              your financial journey or an experienced professional seeking to
              enhance your financial prowess, "Mastering Your Finances" promises
              to lay the cornerstone for a lifetime of fiscal success.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="Live to Save"
            css={{ backgroundColor: "#E2F9B8", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Uncover the techniques to cut unnecessary expenses, create an
              effective budget, and establish an emergency fund that offers
              security during unforeseen circumstances. Gain insights into
              automating your savings and explore the various avenues to
              optimize your funds, including high-yield savings accounts,
              investments, and retirement planning.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="The Cash Chronicles"
            css={{ backgroundColor: "#E2F9B8", color: "white" }}
          >
            <Text
              size={26}
              css={{ fontWeight: "$normal", color: "gray" }}
              h2
            ></Text>
          </Collapse>

          <Collapse
            shadow
            title="From Pennies to Prosperity"
            css={{ backgroundColor: "#E2F9B8", color: "gray" }}
          >
            <Text
              size={26}
              css={{ fontWeight: "$normal", color: "gray" }}
              h2
            ></Text>
          </Collapse>
        </Collapse.Group>
      </Container>
      <Spacer y={24} />
      <Footer />
    </div>
  );
};

export default ModulesHome;
