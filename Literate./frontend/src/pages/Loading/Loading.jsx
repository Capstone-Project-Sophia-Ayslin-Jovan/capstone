import React from "react";
import { Loading } from "@nextui-org/react";
import "./Loading.css"

const Loadings = () => {
  return (
    <div className="centered-container">
      <div className="loading-icon">
        <Loading size="xl" textColor="primary"> Loading </Loading>
      </div>
    </div>
  );
};

export default Loadings;
