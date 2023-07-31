import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import { Container, Spacer, Text } from "@nextui-org/react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { AuthorizeContext } from "../../contexts/authUser";
import Sidebar from "../../components/Sidebar/Sidebar";

export const Profile = ({ handleToggle, isOpen }) => {
  const { authState } = useContext(AuthorizeContext);
  const { user } = authState;
  console.log("User:", user);
  return (
    <div className="profile-page">
      <div className="container">
        <Container>
          <Text h2 className="account-title">
            My Account
          </Text>
          <hr></hr>
          <Text h3>Account Information</Text>
          <Spacer y={2} />
          <div className="container">
            <div className="info-container">
              <Text size={24} p>
                Username
              </Text>
              <Text size={20} p>
                {user?.username}
              </Text>
              <Text size={18} color="blue" p>
                Change Username
              </Text>
              <Text p></Text>
              <Spacer y={4} />
              <Text size={24} p>
                Password
              </Text>
              <Text size={20} p>
                *********
              </Text>
              <Text size={18} color="blue" p>
                Change Password
              </Text>
            </div>
          </div>
        </Container>
      </div>
      <Spacer y={20} />
      <Footer />
    </div>
  );
};
