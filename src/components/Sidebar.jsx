import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useUser();
  const navigate = useNavigate();

  const { fullName, role } = user.user;

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
            className="absolute h-8 w-8 top-4 right-4 md:hidden"
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
            className="absolute top-1 right-0 p-6 cursor-pointer text-3xl"
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            &times;
          </div>
          <Link
            to="/user/MarcLowelCastillo"
            className="flex gap-6 mb-8 cursor-pointer"
          >
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
              className="h-12 w-12 rounded-full"
              alt="User"
            />
            <div>
              <p className="font-bold text-lg">{fullName}</p>
              <p className="text-xs">{role}</p>
            </div>
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Subjects
          </NavLink>
          <NavLink
            to="/qa"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Question & Answers
          </NavLink>
          <NavLink
            to="/announcements"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Announcements
          </NavLink>
          <NavLink
            to="/classlist"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Class List
          </NavLink>
        </div>
        <button
          className="sidebar-option w-full bg-[#f4c5cc]"
          onClick={() => {
            user.logout();
            navigate("/register");
          }}
        >
          Logout
        </button>
      </nav>

      {/* Desktop Nav*/}
      <nav
        className={`z-10 hidden rounded-br-3xl rounded-tr-3xl bg-gradient-to-tr from-white to-blue-200/30 md:flex md:flex-col md:justify-between md:right-0 md:min-w-[20rem] md:h-screen md:bg-blue-white md:p-8 md:shadow-xl md:backdrop-blur-sm md:w-[10rem]`}
      >
        <div>
          <Link
            to="/user/MarcLowelCastillo"
            className="flex gap-6 mb-8 cursor-pointer"
          >
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
              className="h-12 w-12 rounded-full"
              alt="User"
            />
            <div>
              <p className="font-bold text-lg">{fullName}</p>
              <p className="text-xs">{role}</p>
            </div>
          </Link>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Subjects
          </NavLink>
          <NavLink
            to="/qa"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Question & Answers
          </NavLink>
          <NavLink
            to="/announcements"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Announcements
          </NavLink>
          <NavLink
            to="/classlist"
            className={({ isActive }) =>
              `sidebar-option ${isActive ? "sidebar-option-active" : ""}`
            }
          >
            Class List
          </NavLink>
        </div>
        <button
          className="sidebar-option w-full bg-[#f4c5cc] hover:bg-[#f4c5cc] "
          onClick={() => {
            user.logout();
            navigate("/register");
          }}
        >
          Logout
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
