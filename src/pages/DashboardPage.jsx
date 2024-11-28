import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = (props) => {
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Dashboard" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 lg:justify-center lg:items-center ">
          <h2 className="text-2xl font-bold lg:text-4xl">Dashboard</h2>
          <div className="grid grid-cols-2 grid-rows-3  gap-4 h-[calc(100vh-7rem)] w-full mt-4 lg:grid-cols-7  lg:p-4 lg:border-[1px] lg:max-h-[40rem] xl:max-w-[80rem] border-black rounded-2xl ">
            <div className="overflow-y-auto p-4 col-span-2 w-full rounded-xl order-1 border-[1px] border-black lg:order-3 lg:col-span-3 lg:row-span-3">
              <h2 className="text-center text-xl font-bold ">Todos</h2>
              <div className="mt-4 bg-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Assignment #1</h3>
                <p className="text-sm">Purposive Communication</p>
                <p className="text-sm">Due Date: November 27, 2024</p>
              </div>
              <div className="mt-4 bg-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Assignment #1</h3>
                <p className="text-sm">Purposive Communication</p>
                <p className="text-sm">Due Date: November 27, 2024</p>
              </div>
              <div className="mt-4 bg-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Assignment #1</h3>
                <p className="text-sm">Purposive Communication</p>
                <p className="text-sm">Due Date: November 27, 2024</p>
              </div>
              <div className="mt-4 bg-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Assignment #1</h3>
                <p className="text-sm">Purposive Communication</p>
                <p className="text-sm">Due Date: November 27, 2024</p>
              </div>
              <div className="mt-4 bg-blue-200 p-4 rounded-lg">
                <h3 className="font-bold text-lg">Assignment #1</h3>
                <p className="text-sm">Purposive Communication</p>
                <p className="text-sm">Due Date: November 27, 2024</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-white  border-black border-[1px] col-span-1 rounded-xl order-3 lg:order-1 lg:col-span-2 ">
              <h2 className="text-xl font-bold">Pending Tasks</h2>
              <p className="text-5xl font-bold">12</p>
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
