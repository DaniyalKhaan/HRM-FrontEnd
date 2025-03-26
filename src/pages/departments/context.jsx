import { createContext, useState, useEffect } from "react";
import { fetchDepartments, fetchDepartmentById, deleteDepartment, getEmployees } from "../../services/departments"; // ✅ Import the service


export const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {

  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [employees, setEmployees] = useState([]);


    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        cosole.log(err.message);
      }
    };

  
  const getDepartments = async () => {
    try {
      const data = await fetchDepartments();
      setDepartments(data);
    } catch (error) {
      console.error("Failed to load departments:", error);
    }
  };
  useEffect(() => {

    getDepartments();
    fetchEmployees();
  }, []);

    const removeDepartment = async (id) => {
      try {
        await deleteDepartment(id);
        setDepartments((prev) => prev.filter((dep) => dep._id !== id)); // Remove from UI
              // Clear selectedEmployee if it was deleted
              if (selectedDepartment && selectedDepartment._id === id) {
                setSelectedDepartment(null);
              }
              // NEED TO SEE ABOVE CODE
      } catch (error) {
        console.error("Error deleting department:", error);
      }
    };

    

  const getDepartmentById = async (id) => {
    try {
      const department = await fetchDepartmentById(id);
      // Optionally, update the selectedDepartment state with the fetched department.
      setSelectedDepartment(department);
      return department;
    } catch (error) {
      console.error("Error fetching department by ID:", error);
      throw error;
    }
  };

  return (
    <DepartmentContext.Provider value={{ departments, getDepartmentById, removeDepartment, selectedDepartment, setSelectedDepartment, fetchEmployees }}>
      {children}
    </DepartmentContext.Provider>
  );
};
