import axiosInstance from "../services/axiosInstance";

// Get all employees
export const getEmployees = async () => {
  try {
    const response = await axiosInstance.get("/employees");
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

// Create new employee
export const createEmployee = async (employeeData) => {
  try {
    const response = await axiosInstance.post("/employees", employeeData);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

// delete employee
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axiosInstance.delete(`/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};



