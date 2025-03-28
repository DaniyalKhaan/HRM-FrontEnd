import { createContext, useContext, useEffect, useState } from "react";
import { getEmployees, createEmployee, deleteEmployee, getEmployeeById,  updateEmployee as updateEmployeeService } from "../../services/employeeService";
import { fetchDepartments } from "../../services/departments";


export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // ✅ New state for selected employee
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departments, setDepartments] = useState([]);



  const addEmployee = async (employeeData) => {
    const newEmployee = await createEmployee(employeeData);
    setEmployees((prev) => [...prev, newEmployee]);
  };


  useEffect(() => {
    fetchEmployees();
    getDepartments();
  }, []);



  const updateEmployee = async (id, employeeData) => {
    try {
      const updatedEmployee = await updateEmployeeService(id, employeeData);
      await fetchEmployees();

    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const removeEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((emp) => emp._id !== id)); // Remove from UI
            // Clear selectedEmployee if it was deleted
            if (selectedEmployee && selectedEmployee._id === id) {
              setSelectedEmployee(null);
            }
            // NEED TO SEE ABOVE CODE
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
  


    // function to fetch an employee by ID
    const fetchEmployeeById = async (id) => {
      try {
        return await getEmployeeById(id);
      } catch (error) {
        console.error("Error fetching employee by ID:", error);
        throw error;
      }
    };

  return (
    <EmployeesContext.Provider value={{ departments, employees, selectedEmployee, setSelectedEmployee, loading, error, addEmployee, updateEmployee, fetchEmployeeById, removeEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeesContext);
};
