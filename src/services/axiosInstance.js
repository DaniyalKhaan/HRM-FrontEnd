import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // ✅ Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      console.log("Final Request Config:", config); // 👈 Inspect this
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  

export default axiosInstance;
