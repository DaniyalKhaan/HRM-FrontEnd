import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Store token
  const [user, setUser] = useState(null); // Store user decoded from token
  const [loading, setLoading] = useState(true); // Loading state

  // Check for existing token on app load
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const decodedUser = jwtDecode(storedToken); // Decode user data
      setUser(decodedUser);

      if (decodedUser.username) {
        console.log(`decode USER NAME : ${decodedUser.username}`)
        localStorage.setItem("username", decodedUser.username);
      }
    }
    setLoading(false); // Done loading
  }, []);

  useEffect(() => {
    console.log("User Updated:", user);
  }, [user]); // ✅ Runs when `user` changes

  // Login function to store token
  const login = (receivedToken) => {
    setToken(receivedToken);
    localStorage.setItem("token", receivedToken);
    
    
    const decodedUser = jwtDecode(receivedToken);
    setUser(decodedUser);
    if (decodedUser.username) {
      console.log(`decode USER NAME : ${decodedUser.username}`)
      localStorage.setItem("username", decodedUser.username);
    }
  };

  // Logout function
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };



  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
