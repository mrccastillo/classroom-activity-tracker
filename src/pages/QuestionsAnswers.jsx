import React from "react";
import Sidebar from "../components/Sidebar";

const QuestionAndAnswers = (props) => {
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="QA" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <h2 className="text-2xl font-bold lg:text-4xl">Q&A Section</h2>
          <div className="grid grid-cols-3 gap-8 h-full">
            {/* left side div in desktop */}
            <div className="col-span-3 xl:col-span-2 xl:">
              <button className="w-full p-2 bg-blue-nav mt-4 rounded-full text-white">
                Ask a Question
              </button>
              <div className="question">
                {" "}
                <div
                  className="flex gap-6 mb-4"
                  onClick={() => {
                    navigate("/user/MarcLowelCastillo");
                  }}
                >
                  <img
                    src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-md">Marc Lowel Castillo</p>
                    <p className="text-xs">Class Officer</p>
                  </div>
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  labore, animi vitae fugiat autem similique magnam. Sequi esse
                  quos obcaecati alias ut explicabo saepe, quisquam, ipsa
                  exercitationem commodi eligendi natus. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Repellendus perspiciatis
                  nostrum quis quos aut molestiae voluptate voluptatibus nulla,
                  illo nobis nemo facilis magni distinctio? Amet ea voluptates
                  sed ad ratione.
                </p>
              </div>
            </div>
            {/* right side div in desktop */}
            <div className="hidden p-4 rounded-xl h-full xl:block xl:col-span-1 xl:bg-blue-white ">
              <h2>Announcements</h2>
              <div className="question">
                {" "}
                <div
                  className="flex gap-6 mb-4"
                  onClick={() => {
                    navigate("/user/MarcLowelCastillo");
                  }}
                >
                  <img
                    src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-md">Marc Lowel Castillo</p>
                    <p className="text-xs">Class Officer</p>
                  </div>
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  labore, animi vitae fugiat autem similique magnam. Sequi esse
                  quos obcaecati alias ut explicabo saepe, quisquam, ipsa
                  exercitationem commodi eligendi natus. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Repellendus perspiciatis
                  nostrum quis quos aut molestiae voluptate voluptatibus nulla,
                  illo nobis nemo facilis magni distinctio? Amet ea voluptates
                  sed ad ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionAndAnswers;
