import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BackButton from "../components/BackButton";

const UserProfile = (props) => {
  const { userId } = useParams();

  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="ClassList" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          {/* <BackButton /> */}
          <h2 className="text-2xl font-bold lg:text-4xl">{userId}</h2>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
