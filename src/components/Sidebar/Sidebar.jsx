import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Nav*/}
      {!isSidebarOpen && (
        <div
          className="absolute top-0 right-0 p-4 cursor-pointer md:hidden"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          openNav
        </div>
      )}

      <div
        className={`absolute flex flex-col justify-between right-0 min-w-[75%] h-screen bg-blue-white p-8 shadow-2xl backdrop-blur-sm ${
          !isSidebarOpen && "translate-x-full"
        } transition-all duration-200 md:hidden`}
      >
        <div>
          <div
            className="absolute top-0 right-0 p-4 cursor-pointer"
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            X
          </div>
          <div
            className="flex gap-6 mb-8"
            onClick={() => {
              navigate("/user/MarcLowelCastillo");
            }}
          >
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-bold text-lg">Marc Lowel Castillo</p>
              <p className="text-xs">Class Officer</p>
            </div>
          </div>
          <p
            className={`sidebar-option ${
              activeTab === "Dashboard" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </p>
          <p
            className={`sidebar-option ${
              activeTab === "Subjects" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/subjects");
            }}
          >
            Subjects
          </p>
          <p
            className={`sidebar-option ${
              activeTab === "QA" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/qa");
            }}
          >
            Question & Answers
          </p>
          <p
            className={`sidebar-option ${
              activeTab === "ClassList" && "sidebar-option-active"
            }`}
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

      {/* Desktop Nav*/}
      <div
        className={`hidden md:flex md:flex-col md:justify-between md:right-0 md:min-w-[20rem] md:h-screen md:bg-blue-white md:p-8 md:shadow-xl md:backdrop-blur-sm md:w-[10rem]`}
      >
        <div>
          <div
            className="flex gap-6 mb-8"
            onClick={() => {
              navigate("/user/MarcLowelCastillo");
            }}
          >
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-bold text-lg">Marc Lowel Castillo</p>
              <p className="text-xs">Class Officer</p>
            </div>
          </div>
          <p
            className={`sidebar-option ${
              activeTab === "Dashboard" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </p>
          <p
            className={`sidebar-option ${
              activeTab === "Subjects" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/subjects");
            }}
          >
            Subjects
          </p>
          <p
            className={`sidebar-option ${
              activeTab === "QA" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/qa");
            }}
          >
            Question & Answers
          </p>
          <p
            className={`sidebar-option ${
              activeTab === "ClassList" && "sidebar-option-active"
            }`}
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
    </>
  );
};

export default Sidebar;
