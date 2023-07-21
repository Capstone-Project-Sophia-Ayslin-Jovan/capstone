import React from "react";
import "./Footer.css";
import { Spacer, Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="footer">
      <Text color="white" p>
        Finance. Support. Literacy.
      </Text>
      <span className="footer-container">
        <Text color="white" p>
          Terms of Use
        </Text>
        <Spacer x={0.5} />
        <Text color="white" p>
          Privacy Policy
        </Text>
      </span>
      <Text color="lightGray" p>
        2023 Literate.
      </Text>
    </div>
  );
};

export default Footer;
