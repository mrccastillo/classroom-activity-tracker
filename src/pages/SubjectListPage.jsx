import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AddSubjectModal from "../components/modals/AddSubjectModal";
import { useUser } from "../contexts/UserContext";

const SubjectListPage = (props) => {
  const navigate = useNavigate();
  const [isAddSubjectOpen, setIsAddSubjectOpen] = useState(false);
  const [section, setSection] = useState([]);
  const user = useUser();

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await axios.get(
          `https://classroom-activity-tracker.onrender.com/api/section?id=67a1dafd54f60a2632fb5647`,
          {
            headers: {
              Authorization: `${user.token}`,
            },
          }
        );
        console.log("Section: ", response.data.subjects);
        setSection(response.data.subjects);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchSection();
  }, []);

  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="Subjects" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-32">
          <h2 className="text-2xl font-bold lg:text-4xl">Subjects</h2>
          <div className="flex flex-col gap-2 pb-4 mt-4 flex-wrap md:flex-row md:gap-4">
            {section.map((subject) => (
              <div
                key={subject._id}
                className={`subject`}
                style={{ backgroundColor: subject.subjectColor }}
                onClick={() => {
                  navigate(`/subjects/${subject.subjectName}`);
                }}
              >
                <p className="text-center">{subject.subjectName}</p>
              </div>
            ))}
            {/* <div
              className="subject "
              onClick={() => {
                navigate("/subjects/Computer Programming");
              }}
            >
              <p className="text-center">Computer Programming</p>
            </div> */}
            <div
              className="subject bg-gray-200/50"
              onClick={() => {
                setIsAddSubjectOpen(true);
              }}
            >
              <p className="text-center text-5xl font-extralight">+</p>
            </div>
          </div>
        </div>
        {isAddSubjectOpen && (
          <AddSubjectModal
            onCloseModal={() => {
              setIsAddSubjectOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default SubjectListPage;
