import { createContext, useContext, useEffect, useState } from "react";
import { getEmployees, createEmployee, deleteEmployee, getEmployeeById,  updateEmployee as updateEmployeeService } from "../../services/employeeService";

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // ✅ New state for selected employee
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const addEmployee = async (employeeData) => {
    const newEmployee = await createEmployee(employeeData);
    setEmployees((prev) => [...prev, newEmployee]);
  };



  const updateEmployee = async (id, employeeData) => {
    try {
      const updatedEmployee = await updateEmployeeService(id, employeeData); // API call to update employee
      setEmployees((prev) =>
        prev.map((emp) => (emp._id === id ? updatedEmployee : emp)) // Update UI with new employee data
      );
      // if (selectedEmployee && selectedEmployee._id === id) {
      //   setSelectedEmployee(updatedEmployee);
      // }
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
  
  useEffect(() => {
    fetchEmployees();
  }, []);

    // ✅ New function to fetch an employee by ID
    const fetchEmployeeById = async (id) => {
      try {
        return await getEmployeeById(id);
      } catch (error) {
        console.error("Error fetching employee by ID:", error);
        throw error;
      }
    };

  return (
    <EmployeesContext.Provider value={{ employees, selectedEmployee, setSelectedEmployee, loading, error, addEmployee, updateEmployee, fetchEmployeeById, removeEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeesContext);
};
