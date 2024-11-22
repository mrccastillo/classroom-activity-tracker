import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const SubjectListPage = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <p className="">subjects</p>
      <p
        onClick={() => {
          navigate("/subjects/ComputerProgramming");
        }}
      >
        Computer Programming
      </p>
      <p
        onClick={() => {
          navigate("/subjects/Math");
        }}
      >
        Math
      </p>
    </>
  );
};

export default SubjectListPage;
