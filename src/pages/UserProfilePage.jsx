import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const UserProfile = (props) => {
  const { userId } = useParams();

  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <div>{userId}</div>
      </div>
    </>
  );
};

export default UserProfile;
