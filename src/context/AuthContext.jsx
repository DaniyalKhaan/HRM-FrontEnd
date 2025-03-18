import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Store token
  const [user, setUser] = useState(null); // Store user decoded from token
  const [loading, setLoading] = useState(true); // Loading state
  const [employee, setEmployee] = useState(0); // ✅ Store employee count

  // Check for existing token on app load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const decodedUser = jwtDecode(storedToken); // Decode user data
      setUser(decodedUser);
    }
    setLoading(false); // Done loading
  }, []);

  // Login function to store token
  const login = (receivedToken) => {
    setToken(receivedToken);
    localStorage.setItem("token", receivedToken);
    const decodedUser = jwtDecode(receivedToken);
    setUser(decodedUser);
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };



  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
