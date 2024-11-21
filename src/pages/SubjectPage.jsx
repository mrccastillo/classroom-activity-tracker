import React from "react";
import { useParams } from "react-router-dom";

const SubjectPage = (props) => {
  const { subjectId } = useParams();
  return <div>Subject: {subjectId}</div>;
};

export default SubjectPage;
