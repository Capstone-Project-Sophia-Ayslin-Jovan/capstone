"use client";


import React from "react";
import { Link, Input, User, Spacer, Text } from "@nextui-org/react";
import "./Landing.css";
import NavbarContent from "@/NavbarContent/NavbarContent";
// import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div>
      <NavbarContent />
      <Spacer y={8} />
      <Text size={"$6xl"}>Literate.</Text>
      <Text size={"$2xl"}>Smart Money, Bright Future</Text>
      <Button size="lg">Get Started</Button>
    </div>
  );
}
