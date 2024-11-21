import { useParams } from "react-router-dom";

const UserProfile = (props) => {
  const { userId } = useParams();

  return <div>{userId}</div>;
};

export default UserProfile;
