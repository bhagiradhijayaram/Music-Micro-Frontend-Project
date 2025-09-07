import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { useAuth } from "../context/AuthContext";
import { Suspense, lazy } from "react";

const MusicLibrary = lazy(() => import("musicLibrary/App"));

const MusicDashboard = ({ role }) => {
  const navigate = useNavigate();
  const { userData, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar
        caption={role === "admin" ? "Admin User" : "Regular User"}
        logout={handleLogout}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <MusicLibrary user={userData} />
      </Suspense>
    </>
  );
};
export default MusicDashboard;
