import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Correct context path
import axiosInstance from "../services/axiosInstance"; // Use custom axios instance
import { useNavigate } from "react-router-dom";

import OneImage from "../assets/one.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // Username field
  const [password, setPassword] = useState(""); // Password field
  const { login } = useContext(AuthContext); // Get login function from context
  const navigate = useNavigate(); // Navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });

      console.log("Response data:", response.data); // Debug response

      const token = response.data.access_token; // Extract token (adjust key if backend differs)
      console.log("Extracted Token:", token);

      if (token) {
        login(token); // Save token in context & localStorage via context function
        navigate("/dashboard"); // Navigate to dashboard after login
      } else {
        alert("Token not received. Please check your credentials or backend response.");
      }
    } catch (error) {
      console.error("Login error:", error);
      const message = error.response?.data?.message || "Invalid username or password!";
      alert(message); // Show error message
    }
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F4F4F4",
      }}
    >
      {/* Left Side - Image */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={OneImage}
          alt="Logo"
          style={{ width: "400px", height: "400px" }}
        />
      </Box>

      {/* Right Side - Login Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "30%",
          px: 5.5,
          py: 3,
          mr: 5,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "#FFFFFF",
        }}
      >
        <Typography sx={{ color: "#2F2F2F", pt: 2 }} variant="h5" gutterBottom>
          Welcome to
        </Typography>

        <Typography
          sx={{
            color: "#6358DC",
            fontWeight: 700,
            fontSize: 46,
            lineHeight: 0.8,
          }}
          variant="h2"
          gutterBottom
        >
          Design School
        </Typography>

        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Username"
          margin="normal"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Username update
          sx={{ bgcolor: "#F4F4F4", borderRadius: 1 }}
        />

        <TextField
          sx={{ bgcolor: "#F4F4F4", borderRadius: 1 }}
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Password update
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    pr: 0.7,
                    "&:focus": { outline: "none" },
                    "&:focusVisible": { outline: "none" },
                  }}
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, height: "56px", borderRadius: "16px" }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}
