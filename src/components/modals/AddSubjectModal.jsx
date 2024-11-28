import React from "react";

const AddSubjectModal = ({ onCloseModal }) => {
  return (
    <div className="fixed h-[30rem] w-[20rem] p-4 rounded-lg bg-white/80 backdrop-blur-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute top-0 right-0 p-4 cursor-pointer"
        onClick={onCloseModal}
      >
        X
      </div>
      <h2 className="text-center">Add Subject</h2>
    </div>
  );
};

export default AddSubjectModal;
