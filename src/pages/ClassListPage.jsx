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
          <div className="grid grid-cols-1 mt-4">
            <div
              className="subject"
              onClick={() => {
                navigate("/user/Marc Lowel J. Castillo");
              }}
            >
              <p>Marc Lowel J. Castillo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassList;
