import axios from "axios";

const BASE_URL = "http://localhost:3000/departments"; // ✅ Update if needed

// Function to fetch all departments
export const fetchDepartments = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(`Response Data    :    ${response}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error; // Re-throw to handle errors in calling function
  }
};


// ✅ New: Function to fetch a department by ID
export const fetchDepartmentById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      console.log(`Department Response Get By ID   ${response}`)
      return response.data;
    } catch (error) {
      console.error("Error fetching department by ID:", error);
      throw error;
    }
  };


  // delete department
  export const deleteDepartment = async (depId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${depId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting department:", error);
      throw error;
    }
  };

  export const getEmployees = async () => {
    try {
      const response = await axiosInstance.get("/employees");
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  };