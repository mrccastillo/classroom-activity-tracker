import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar activeTab="Dashboard" />
        <p className="">dashboard</p>
      </div>
    </>
  );
};

export default Dashboard;
