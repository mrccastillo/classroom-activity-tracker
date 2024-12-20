import React from "react";

const AddQuestionModal = ({ dispatch }) => {
  return (
    <div className="flex flex-col gap-4 fixed h-[30rem] w-[20rem] p-4 rounded-lg bg-white backdrop-blur-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black border-[1px] overflow-hidden">
      <h2 className="text-center">Ask a Question</h2>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <div>
            <p>Title</p>
            <input
              className="p-2 w-full outline-none border-[1px] border-black rounded-lg mt-2 focus:outline-[1px] focus:outline-blue-300"
              type="text"
              placeholder="Enter subject name"
            />
          </div>
          <div>
            <p>Content</p>
            <textarea
              name="content"
              id="content"
              className="resize-none text-xs text-black/50 w-full h-40 border-[1px] border-black/50 outline-none rounded-lg p-2 focus:text-black focus:outline-[1px] focus:outline-blue-300"
            >
              test
            </textarea>
          </div>
        </div>
        <button className="w-full bg-blue-400 p-2 rounded-lg text-white">
          Submit
        </button>
      </div>
      <div
        className="absolute -top-1 right-0 p-4 cursor-pointer text-2xl"
        onClick={() => dispatch({ type: "TOGGLE_QUESTION_MODAL" })}
      >
        &times;
      </div>
    </div>
  );
};

export default AddQuestionModal;
