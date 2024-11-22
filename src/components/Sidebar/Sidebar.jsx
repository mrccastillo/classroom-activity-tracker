import React from "react";
import { useNavigate } from "react-router-dom";
// import { Menu } from "@material-ui/icons/Menu";
const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col justify-between right-0 min-w-[75%] h-screen bg-blue-white p-8 shadow-2xl backdrop-blur-sm md:hidden">
      {/* <Menu /> */}
      <div>
        <div className="flex gap-6 mb-8">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <p className="font-bold text-lg">Marc Lowel Castillo</p>
            <p>Class Officer</p>
          </div>
        </div>
        <p
          className="sidebar-option sidebar-option-active"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </p>
        <p
          className="sidebar-option"
          onClick={() => {
            navigate("/subjects");
          }}
        >
          Subjects
        </p>
        <p
          className="sidebar-option"
          onClick={() => {
            navigate("/qa");
          }}
        >
          Question & Answers
        </p>
        <p
          className="sidebar-option"
          onClick={() => {
            navigate("/classlist");
          }}
        >
          Class List
        </p>
      </div>
      <button
        className="sidebar-option w-full bg-[#f4c5cc]"
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
