import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import BackButton from "../components/BackButton";

const SubjectPage = (props) => {
  const { subjectId } = useParams();
  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Subjects" />
        <div className=" p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          {/* <BackButton /> */}
          <h2 className="text-2xl font-bold lg:text-4xl">{subjectId}</h2>
          <div className=" h-[calc(100vh-7rem)] w-full mt-4 lg:grid-cols-7 lg:p-4 lg:border-[1px] border-black rounded-2xl">
            test
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectPage;
