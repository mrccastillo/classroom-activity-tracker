import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const QuestionAndAnswers = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar activeTab="QA" />
        <p className="">Question and Answers</p>
      </div>
    </>
  );
};

export default QuestionAndAnswers;
