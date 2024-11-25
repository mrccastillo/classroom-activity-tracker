import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const QuestionAndAnswers = (props) => {
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="QA" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <h2 className="text-2xl font-bold lg:text-4xl">Q&A Section</h2>
        </div>
      </div>
    </>
  );
};

export default QuestionAndAnswers;
