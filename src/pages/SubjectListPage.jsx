import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const SubjectListPage = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Subjects" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <h2 className="text-2xl font-bold lg:text-4xl">Subjects</h2>
          <div className="flex flex-col gap-2 mt-4 flex-wrap md:flex-row md:gap-4">
            <div
              className="subject "
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div>
            <div
              className="subject"
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div>
            <div
              className="subject"
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div>
            <div
              className="subject"
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div>
            <div
              className="subject"
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div>
            <div
              className="subject"
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectListPage;
