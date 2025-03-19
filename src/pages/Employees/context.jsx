import { createContext, useContext, useEffect, useState } from "react";
import { getEmployees, createEmployee, deleteEmployee } from "../../services/employeeService";

export const EmployeesContext = createContext();

export const EmployeesProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const addEmployee = async (employeeData) => {
    const newEmployee = await createEmployee(employeeData);
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const updateEmployee = async (id, employeeData) => {
    // API call to update
  };

  const removeEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((emp) => emp._id !== id)); // Remove from UI
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

  return (
    <EmployeesContext.Provider value={{ employees, loading, error, addEmployee, removeEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeesContext);
};
