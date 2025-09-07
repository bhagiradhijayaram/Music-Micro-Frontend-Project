import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = ({ username, password }) => {
    let role = "user";
    if (username === "admin" && password === "admin123") {
      role = "admin";
    }

    const token = "xyz234x2y3z4";
    const userDataWithRole = { username, password, role, token };

    localStorage.setItem("user", JSON.stringify(userDataWithRole));
    setUserData(userDataWithRole);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
