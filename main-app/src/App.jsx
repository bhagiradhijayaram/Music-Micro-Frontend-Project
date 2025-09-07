import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MusicDashboard from "./pages/MusicDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute role="user">
                <MusicDashboard role="user" />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute role="admin">
                <MusicDashboard role="admin" />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" />} />

          <Route
            path="*"
            element={
              <div className="p-6 text-red-600">404 - Page Not Found</div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
