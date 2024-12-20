import React, { useState } from "react";

const AddSubjectModal = ({ onCloseModal }) => {
  function handleInputChange(e) {
    console.log(e.target.value);
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
            />
          </div>
          <div>
            <p>Instructor</p>
            <input
              className="p-2 w-full outline-none border-[1px] border-black rounded-lg mt-2"
              type="text"
              placeholder="Professor/Instructor Full Name"
            />
          </div>
          <div>
            <p>Pick a color:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <div className="bg-red-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-blue-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-green-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-yellow-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-indigo-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-purple-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-pink-400 h-8 w-8 rounded-lg"></div>
              <div className="bg-gray-400 h-8 w-8 rounded-lg"></div>
            </div>
          </div>
        </div>
        <button className="w-full bg-blue-400 p-2 rounded-lg text-white">
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
