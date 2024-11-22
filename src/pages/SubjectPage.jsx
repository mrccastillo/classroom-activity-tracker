import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const SubjectPage = (props) => {
  const { subjectId } = useParams();
  return (
    <>
      <Sidebar />
      <p className="">subject: {subjectId}</p>
    </>
  );
};

export default SubjectPage;
