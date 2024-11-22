import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const SubjectPage = (props) => {
  const { subjectId } = useParams();
  return (
    <>
      <div className="flex justify-between">
        <Sidebar activeTab="Subjects" />
        <p className="">subject: {subjectId}</p>
      </div>
    </>
  );
};

export default SubjectPage;
