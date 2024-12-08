import React from "react";
import Sidebar from "../components/Sidebar";

const AnnouncementPage = (props) => {
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Announcements" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <h2 className="text-2xl font-bold lg:text-4xl">Announcements</h2>
          <div className="flex flex-col items-center col-span-3 xl:col-span-2">
            <button className="w-full p-2 bg-blue-nav mt-4 rounded-full text-white shadow-md  lg:mb-4">
              Add an Announcement
            </button>
            <div className="question w-full">
              {" "}
              <div
                className="flex gap-6 mb-4 pb-4 border-b-[1px] border-black/20 cursor-pointer"
                onClick={() => {
                  navigate("/user/MarcLowelCastillo");
                }}
              >
                <img
                  src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-md">Nathaniel Sarmiento</p>
                  <p className="text-xs">Class President</p>
                </div>
              </div>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                labore, animi vitae fugiat autem similique magnam. Sequi esse
                quos obcaecati alias ut explicabo saepe, quisquam, ipsa
                exercitationem commodi eligendi natus. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Repellendus perspiciatis
                nostrum quis quos aut molestiae voluptate voluptatibus nulla,
                illo nobis nemo facilis magni distinctio? Amet ea voluptates sed
                ad ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnouncementPage;
