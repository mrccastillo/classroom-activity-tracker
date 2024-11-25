import { useNavigate } from "react-router-dom";

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="hidden xl:block xl:absolute xl:top-20 xl:left-36 xl:-translate-x-1/2 xl:-translate-y-1/2"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
};

export default BackButton;
