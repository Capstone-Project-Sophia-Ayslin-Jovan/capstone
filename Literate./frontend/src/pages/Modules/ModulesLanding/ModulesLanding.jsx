import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

const ModulesLanding = ({}) => {
  return (
    <div>
      <Sidebar
        handleLogout={handleLogout}
        handleToggle={handleToggle}
        isOpen={isOpen}
      />
    </div>
  );
};

export default ModulesLanding;
