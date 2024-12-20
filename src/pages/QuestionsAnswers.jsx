import { useReducer } from "react";
import Sidebar from "../components/Sidebar";
import AddQuestionModal from "../components/modals/AddQuestionModal";
import { useNavigate } from "react-router-dom";

const initialState = {
  isQuestionsModalOpen: false,
  filterStatus: "View All",
  questions: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_QUESTION_MODAL":
      return { ...state, isQuestionsModalOpen: !state.isQuestionsModalOpen };

    case "TOGGLE_FILTER_STATUS":
      return { ...state, filterStatus: action.payload };

    default:
      return state;
  }
}

const QuestionAndAnswers = (props) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { isQuestionsModalOpen, filterStatus } = state;

  return (
    <>
      <div className="md:flex">
        <Sidebar activeTab="QA" />
        <div className="p-4 w-screen flex flex-col h-screen md:p-8 xl:p-20">
          <h2 className="text-2xl font-bold lg:text-4xl">Q&A Section</h2>
          <div className="grid grid-cols-3 gap-8 h-full">
            {/* left side div in desktop */}
            <div className="flex flex-col items-center col-span-3 xl:col-span-2">
              <button
                className="w-full p-2 bg-blue-nav mt-4 rounded-full text-white shadow-md  lg:mb-4"
                onClick={() => {
                  dispatch({ type: "TOGGLE_QUESTION_MODAL" });
                }}
              >
                Ask a Question
              </button>
              <div className="mt-6 w-full flex justify-between md:w-11/12">
                {/* category */}
                <div className="text-xs">test</div>
                {/* answered or not */}
                <div className="bg-blue-100 rounded-lg text-xs">
                  <button
                    className={`p-2 rounded-lg ${
                      filterStatus === "Answered Questions" && "bg-blue-300"
                    }`}
                    onClick={() => {
                      dispatch({
                        type: "TOGGLE_FILTER_STATUS",
                        payload: "Answered Questions",
                      });
                    }}
                  >
                    Answered Questions
                  </button>
                  <button
                    className={`p-2 rounded-lg ${
                      filterStatus === "View All" && "bg-blue-300"
                    }`}
                    onClick={() => {
                      dispatch({
                        type: "TOGGLE_FILTER_STATUS",
                        payload: "View All",
                      });
                    }}
                  >
                    View All
                  </button>
                </div>
              </div>
              <div className="w-full question md:w-11/12">
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
              <div className="question w-full">
                {" "}
                <div
                  className="flex gap-6 mb-4  pb-4 border-b-[1px] border-black/20 cursor-pointer"
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
        {isQuestionsModalOpen && <AddQuestionModal dispatch={dispatch} />}
      </div>
    </>
  );
};

export default QuestionAndAnswers;
