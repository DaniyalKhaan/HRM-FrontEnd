import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Login from "./pages/Login"; // Add your Login page import
import { AuthContextProvider, AuthContext } from "./context/AuthContext";
import Employees from "./pages/Employees/Employees";
import { EmployeesProvider } from "./pages/Employees/context";

// Wrap app with AuthContext and Router
export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthContextProvider>
  );
}

// Handle Routes and Auth Logic
const AppRoutes = () => {
  const { token, loading } = useContext(AuthContext); // Access token and loading

  if (loading) return <div>Loading...</div>; // Avoid rendering until done

  return (
    <div style={{ display: "flex", backgroundColor: "", width: "98vw" }}>
      {token && <Sidebar />} {/* Show sidebar only if logged in */}
      <div
        style={{
          width: "100%",
          flexGrow: 1,
          padding: "20px",
          backgroundColor: "#F8F7F1",
        }}
      >
        <Routes>
          {/* Public Route */}
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" replace />}
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <EmployeesProvider>
                  <Employees />
                </EmployeesProvider>
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* Catch All - Redirect based on auth */}
          <Route
            path="*"
            element={<Navigate to={token ? "/" : "/login"} replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { token, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // Avoid redirecting too soon
  if (!token) return <Navigate to="/login" replace />; // Redirect if no token

  return children;
};
