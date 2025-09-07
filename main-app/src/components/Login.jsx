import { FiMusic } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);

    const { username, password } = formData;

    if (username === "admin" && password === "admin123") {
      login({ username, password, role: "admin" });
      navigate("/admin-dashboard");
    } else if (username === "user" && password === "user123") {
      login({ username, password, role: "user" });
      navigate("/user-dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center px-4 h-[100vh]">
      <div className="flex flex-col justify-center items-center mb-8 gap-2">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-300 p-3 rounded">
            <FiMusic size={25} color="#fff" />
          </div>
          <h2 className="text-xl font-semibold">MusicApp</h2>
        </div>
        <p>Sign in to access your music library</p>
      </div>

      <form
        className="border border-gray-300 rounded-md w-full max-w-md py-4 px-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h1 className="text-lg font-semibold">Welcome Back</h1>
          <p>Enter your credentials to continue</p>
        </div>

        <div className="space-y-5">
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputs}
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputs}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
          >
            Sign In
          </button>
        </div>
        <p className="text-red-600">{error}</p>
        <div>
          <h3>Demo accounts:</h3>
          <p>
            <strong>Admin:</strong> username: <code>admin</code>, password:{" "}
            <code>admin123</code>
          </p>
          <p>
            <strong>User:</strong> username: <code>user</code>, password:{" "}
            <code>user123</code>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
