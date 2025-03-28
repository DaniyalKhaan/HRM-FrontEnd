import axios from "axios";


const BASE_URL = "http://localhost:3000/departments"; // ✅ Update if needed

// Function to fetch all departments
export const fetchDepartments = async () => {
  try {
    const response = await axios.get(BASE_URL);
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

  // // Create new employee
  // export const createEmployee = async (employeeData) => {
  //   try {
  //     const response = await axiosInstance.post("/employees", employeeData);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error creating employee:", error);
  //     throw error;
  //   }
  // };
  

  // Get Department by ID
export const getDepartmentByIdService = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching department by ID:", error);
    throw error;
  }
};

  // Create New department
  export const createDepartment = async (depData) => {
    try {
      const response = await axios.post(BASE_URL, depData);
      return response.data;
    } catch (error) {
      console.error("Error Creating department:", error);
      throw error;
    }
  };

  export const updateDepartmentService = async (id, depData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, depData);
      return response.data;
    } catch (error) {
      console.error("Error updating department:", error);
      throw error;
    }
  };

  export const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3000/employees/");
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  };