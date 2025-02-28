import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const ClassList = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="ClassList" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-20">
          <h2 className="text-2xl font-bold lg:text-4xl">Classlist</h2>
          <div className="h-[calc(100vh-7rem)] w-full mt-4 p-4 ">
            {/* grid for the header list of students */}
            <div className="text-xs grid grid-cols-6 gap-4 mb-4 pb-4 px-2 border-b-2 border-black/50">
              <h2 className="col-span-3 md:col-span-3">Name</h2>
              <h2 className="col-span-3 place-self-end md:col-span-2 md:place-self-start">
                Classroom Role
              </h2>
              <h2 className="hidden md:block md:col-span-1 pl-2">Status</h2>
            </div>
            {/* lists of students */}
            <div className="p-2">
              <div
                className="grid grid-cols-6 gap-4 w-full border-b-2 border-black/20 py-4  cursor-pointer"
                onClick={() => {
                  navigate("/user/Marc Lowel J. Castillo");
                }}
              >
                <p className="col-span-3 md:col-span-3">
                  Marc Lowel J. Castillo
                </p>
                <p className="col-span-3 place-self-end bg-purple-200 p-2 text-center rounded-full w-36 text-xs  md:col-span-2 md:place-self-start">
                  CWTS Beadle
                </p>
                <p className="hidden md:block md:col-span-1 bg-green-200 p-2 text-center rounded-full max-w-36 text-xs">
                  Regular
                </p>
              </div>
              <div
                className="grid grid-cols-6 gap-4 w-full border-b-2 border-black/20 py-4  cursor-pointer"
                onClick={() => {
                  navigate("/user/Marc Lowel J. Castillo");
                }}
              >
                <p className="col-span-3 md:col-span-3">
                  Marc Lowel J. Castillo
                </p>
                <p className="col-span-3 place-self-end bg-purple-200 p-2 text-center rounded-full w-36 text-xs  md:col-span-2 md:place-self-start">
                  Committee
                </p>
                <p className="hidden md:block md:col-span-1 bg-blue-200 p-2 text-center rounded-full max-w-36 text-xs">
                  Irregular
                </p>
              </div>
              <div
                className="grid grid-cols-6 gap-4 w-full border-b-2 border-black/20 py-4  cursor-pointer"
                onClick={() => {
                  navigate("/user/Marc Lowel J. Castillo");
                }}
              >
                <p className="col-span-3 md:col-span-3">
                  Marc Lowel J. Castillo
                </p>
                <p className="col-span-3 place-self-end bg-gray-200 p-2 text-center rounded-full w-36 text-xs  md:col-span-2 md:place-self-start">
                  Student
                </p>
                <p className="hidden md:block md:col-span-1 bg-green-200 p-2 text-center rounded-full max-w-36 text-xs">
                  Regular
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassList;
