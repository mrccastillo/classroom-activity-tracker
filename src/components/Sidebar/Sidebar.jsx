import React from "react";

const Sidebar = (props) => {
  return (
    <div className="absolute flex flex-col justify-between right-0 min-w-[75%] h-screen bg-blue-white p-8 shadow-2xl backdrop-blur-sm">
      <div>
        <div className="flex justify-between mb-8">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
            className="h-12 w-12 rounded-full"
          />
          <div>
            <p className="font-bold text-lg">Marc Lowel Castillo</p>
            <p>Class Officer</p>
          </div>
        </div>
        <p className="sidebar-option sidebar-option-active">Dashboard</p>
        <p className="sidebar-option">Subjects</p>
        <p className="sidebar-option">Question & Answers</p>
        <p className="sidebar-option">Class List</p>
      </div>
      <button className="sidebar-option w-full bg-[#f4c5cc]">Logout</button>
    </div>
  );
};

export default Sidebar;
