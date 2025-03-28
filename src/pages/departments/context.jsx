import { createContext, useState, useEffect } from "react";
import { getDepartmentByIdService, updateDepartmentService, fetchDepartments, deleteDepartment, getEmployees, createDepartment } from "../../services/departments"; // ✅ Import the service


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

      const updateDepartment = async (id, depeData) => {
        try {
          const updatedDep = await updateDepartmentService(id, depeData);

          await getDepartments();



        } catch (error) {
          console.error("Error updating department:", error);
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

    const addDepartment = async (depData) => {
      const newDep = await createDepartment(depData);
      setDepartments((prev) => [...prev, newDep]);
    };
  

    const removeDepartment = async (id) => {
      try {
        await deleteDepartment(id);
        setDepartments((prev) => prev.filter((dep) => dep._id !== id)); // Remove from UI
              // Clear selectedDepartment if it was deleted
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
      const department = await getDepartmentByIdService(id);
      // Optionally, update the selectedDepartment state with the fetched department.
      setSelectedDepartment(department);
      return department;
    } catch (error) {
      console.error("Error fetching department by ID:", error);
      throw error;
    }
  };

  return (
    <DepartmentContext.Provider value={{ getDepartmentById, updateDepartment, addDepartment, departments, removeDepartment, selectedDepartment, setSelectedDepartment, employees }}>
      {children}
    </DepartmentContext.Provider>
  );
};
