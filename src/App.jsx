import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/RegisterUserPage";
import QuestionAndAnswers from "./pages/QuestionsAnswers";
import ClassList from "./pages/ClassListPage";
import UserProfile from "./pages/UserProfilePage";
import Dashboard from "./pages/DashboardPage";
import SubjectPage from "./pages/SubjectPage";
import SubjectListPage from "./pages/SubjectListPage";
import AnnouncementPage from "./pages/AnnouncementPage";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterUser />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/qa"
            element={
              <ProtectedRoute>
                <QuestionAndAnswers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classlist"
            element={
              <ProtectedRoute>
                <ClassList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subjects"
            element={
              <ProtectedRoute>
                <SubjectListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subjects/:subjectId"
            element={
              <ProtectedRoute>
                <SubjectPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/announcements"
            element={
              <ProtectedRoute>
                <AnnouncementPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
