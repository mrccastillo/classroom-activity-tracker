import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const ClassList = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="ClassList" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <h2 className="text-2xl font-bold lg:text-4xl">Classlist</h2>
          <div className="h-[calc(100vh-7rem)] w-full mt-4 p-4 lg:border-[1px] lg:border-black rounded-2xl ">
            <div
              className=""
              onClick={() => {
                navigate("/user/Marc Lowel J. Castillo");
              }}
            >
              <p>Marc Lowel J. Castillo</p>
            </div>
            <div
              className=""
              onClick={() => {
                navigate("/user/Sean Paul Monton");
              }}
            >
              <p>Sean Paul Monton</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassList;
