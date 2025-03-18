import { useState } from "react";
import EmployeesTable from "./EmployeesTable";
import EmployeeForm from "./EmployesForm/EmployeesForm";
import { Button, Box, Typography } from "@mui/material";
import { useEmployees } from "./context";

const Employees = () => {
  const { addEmployee } = useEmployees(); // Assume you have addEmployee method in context
  const [openForm, setOpenForm] = useState(false);

  const handleAdd = (employeeData) => {
    addEmployee(employeeData);
  };

  return (
    <div style={{ color: "black" }}>
      <Box display="flex" mb={2}>
        <Typography variant="h5" fontWeight="bold">
          Employee Management
        </Typography>

      </Box>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenForm(true)}
        >
          Add Employee
        </Button>
      </Box>
      <EmployeesTable />
      <EmployeeForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleAdd}
        mode="create"
      />
    </div>
  );
};

export default Employees;
