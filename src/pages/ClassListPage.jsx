import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const ClassList = (props) => {
  return (
    <>
      <div className="flex">
        <Sidebar activeTab="ClassList" />
        <div className="">classlist</div>
      </div>
    </>
  );
};

export default ClassList;
