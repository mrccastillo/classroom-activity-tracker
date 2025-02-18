import React, { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useStudentProfile } from "../../contexts/StudentProfileContext";
import axios from "axios";

const AddSubjectModal = ({ onCloseModal }) => {
  const [subjectName, setSubjectName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { user, token } = useUser();
  const studentProfile = useStudentProfile();

  function handleSubjectNameChange(e) {
    setSubjectName(e.target.value);
  }

  function handleInstructorNameChange(e) {
    setInstructorName(e.target.value);
  }

  function handleColorChange(color) {
    setSelectedColor(color);
  }

  async function handleSubmit() {
    // console.log("Subject Name:", subjectName);
    // console.log("Instructor Name:", instructorName);
    // console.log("Selected Color:", selectedColor);
    console.log("Section: ", studentProfile);
    // console.log(token);
    try {
      console.log(user._id);
      const response = await axios.post(
        `https://classroom-activity-tracker.onrender.com/api/subject?userId=${user._id}`,
        {
          subjectName: subjectName,
          subjectColor: selectedColor,
          professor: instructorName,
          section: studentProfile.section,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
    // Add logic to handle the form submission
  }

  return (
    <div className="flex flex-col gap-4 fixed h-[30rem] w-[20rem] p-4 rounded-lg bg-white backdrop-blur-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black border-[1px] overflow-hidden">
      <h2 className="text-center">Add Subject</h2>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <div>
            <p>Subject name</p>
            <input
              className="p-2 w-full outline-none border-[1px] border-black rounded-lg mt-2"
              type="text"
              placeholder="Enter subject name"
              value={subjectName}
              onChange={handleSubjectNameChange}
            />
          </div>
          <div>
            <p>Instructor</p>
            <input
              className="p-2 w-full outline-none border-[1px] border-black rounded-lg mt-2"
              type="text"
              placeholder="Professor/Instructor Full Name"
              value={instructorName}
              onChange={handleInstructorNameChange}
            />
          </div>
          <div>
            <p>Pick a color:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <div
                className={`bg-red-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#f87171" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#f87171")}
              ></div>
              <div
                className={`bg-blue-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#60a5fa" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#60a5fa")}
              ></div>
              <div
                className={`bg-green-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#4ade80" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#4ade80")}
              ></div>
              <div
                className={`bg-yellow-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#facc15" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#facc15")}
              ></div>
              <div
                className={`bg-indigo-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#818cf8" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#818cf8")}
              ></div>
              <div
                className={`bg-purple-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#c084fc" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#c084fc")}
              ></div>
              <div
                className={`bg-pink-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#f472b6" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#f472b6")}
              ></div>
              <div
                className={`bg-gray-400 h-8 w-8 rounded-lg ${
                  selectedColor === "#9ca3af" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorChange("#9ca3af")}
              ></div>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-blue-400 p-2 rounded-lg text-white"
          onClick={handleSubmit}
        >
          Add Subject
        </button>
      </div>
      <div
        className="absolute -top-1 right-0 p-4 cursor-pointer text-2xl"
        onClick={onCloseModal}
      >
        &times;
      </div>

      {/* <div className="absolute h-32 w-32 left-0 bottom-0 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full -z-10 blur-2xl"></div> */}
    </div>
  );
};

export default AddSubjectModal;
