import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { Container, Spacer, Text, Card, Divider } from "@nextui-org/react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { AuthorizeContext } from "../../contexts/authUser";
import Sidebar from "../../components/Sidebar/Sidebar";

export const Profile = ({ handleToggle, isOpen }) => {
  const { authState } = useContext(AuthorizeContext);
  const { user } = authState;
  return (
    <div className="profile-page">
      <Container>
        <Text h1 className="account-title">
          My Account
        </Text>
        <Divider></Divider>
        <Spacer y={2} />
        <Text size={34} h2>
          Account Information
        </Text>

        <Card>
          <Card.Body>

            <Text size={28} css={{ fontWeight: "bold" }} p>
              Username
            </Text>
            <Text size={24} p>
              {user?.username}
            </Text>
            <Text size={22} color="blue" p>
              Change Username
            </Text>
            <Divider></Divider>
            <Text size={28} css={{ fontWeight: "bold" }} p>
              Password
            </Text>
            <Text size={24} p>
              *********
            </Text>
            <Text size={22} color="blue" p>
              Change Password
            </Text>
          </Card.Body>
        </Card>
      </Container>
      <Spacer y={20} />
      <Footer />
    </div>
  );
};
