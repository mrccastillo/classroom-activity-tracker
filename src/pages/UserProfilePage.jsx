import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";

const UserProfile = (props) => {
  const { userId } = useParams();

  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <div className="flex gap-6 mb-4  pb-4 border-b-[1px] border-black/20 cursor-pointer">
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h2 className="font-bold text-md">Marc Lowel Castillo</h2>
              <p className="text-xs">Class Officer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
