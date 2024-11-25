import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import BackButton from "../components/BackButton";

const SubjectPage = (props) => {
  const { subjectId } = useParams();
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Subjects" />
        <div className="relative p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <BackButton />
          <h2 className="text-2xl font-bold lg:text-4xl">{subjectId}</h2>
        </div>
      </div>
    </>
  );
};

export default SubjectPage;
