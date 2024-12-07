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
          className="md:hidden"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute h-8 w-8 top-4 right-4 md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      )}

      <nav
        className={`z-20 fixed flex flex-col justify-between right-0 min-w-[75%] h-screen bg-gradient-to-tr from-white to-blue-200/30 p-8 shadow-2xl backdrop-blur-lg ${
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
              activeTab === "Announcements" && "sidebar-option-active"
            }`}
            onClick={() => {
              navigate("/announcements");
            }}
          >
            Announcements
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
      </nav>

      {/* Desktop Nav*/}
      <nav
        className={`hidden rounded-br-3xl rounded-tr-3xl bg-gradient-to-tr from-white to-blue-200/30 md:flex md:flex-col md:justify-between md:right-0 md:min-w-[20rem] md:h-screen md:bg-blue-white md:p-8 md:shadow-xl md:backdrop-blur-sm md:w-[10rem]`}
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
              activeTab === "Announcements" && "sidebar-option-active"
            } xl:hidden`}
            onClick={() => {
              navigate("/announcements");
            }}
          >
            Announcements
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
      </nav>
    </>
  );
};

export default Sidebar;
