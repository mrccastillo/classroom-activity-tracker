import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = (props) => {
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Dashboard" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-12">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="grid grid-cols-2 grid-rows-3  gap-4 h-[calc(100vh-7rem)] w-full mt-4 lg:grid-cols-7  lg:p-4 lg:border-[1px] border-black rounded-2xl ">
            <div className="p-4 bg-blue-600 col-span-2 w-full h-full rounded-xl order-1 lg:order-3 lg:col-span-3 lg:row-span-3">
              todo
            </div>
            <div className="p-4 bg-white  border-black border-[1px] col-span-1 rounded-xl order-3 lg:order-1 lg:col-span-2 ">
              task
            </div>
            <div className="p-4 bg-white  border-black border-[1px] col-span-1 rounded-xl order-2 lg:order-2 lg:col-span-2">
              date
            </div>
            <div className="p-4 bg-white  border-black border-[1px]  col-span-2 row-span-2 w-full h-full rounded-xl order-4 lg:order-4 lg:col-span-4">
              qa
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
