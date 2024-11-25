import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUserPage";
import QuestionAndAnswers from "./pages/QuestionsAnswers";
import ClassList from "./pages/ClassListPage";
import UserProfile from "./pages/UserProfilePage";
import Dashboard from "./pages/DashboardPage";
import SubjectPage from "./pages/SubjectPage";
import SubjectListPage from "./pages/SubjectListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/qa" element={<QuestionAndAnswers />} />
        <Route path="/classlist" element={<ClassList />} />
        <Route path="/subjects" element={<SubjectListPage />} />
        <Route path="/subjects/:subjectId" element={<SubjectPage />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
