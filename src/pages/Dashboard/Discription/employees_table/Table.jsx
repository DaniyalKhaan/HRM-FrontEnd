import React from "react";
import DynamicTable from "../../../../components/DynamicTable";
import { useEmployees } from "../../../Employees/context"; // Import the context hook
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

function Table() {
  const { employees, loading, error } = useEmployees(); // Consume context
  const navigate = useNavigate();

  const navigateToEmployees = () => {
    navigate("/employees");
  };
  const employeeColumns = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "department", headerName: "Department" },
    { field: "phone", headerName: "Phone" },
  ];

  const data = employees.map((emp) => ({
    id: emp._id, // Assuming `id` exists in employees
    name: emp.firstName + " " + emp.lastName,
    email: emp.email,
    department: emp.departmentId.name,
    phone: emp.phone,
  }));

  return (
    <>
      <Box>
        <Typography variant="h5" gutterBottom>
          Employees
        </Typography>

        <DynamicTable
          columns={employeeColumns}
          data={data}
          showPagination={false}
          showSearch={false}
        />
      {/* <Box sx={{mt:2, px:1.5}}> */}
      <Box display="flex" justifyContent="flex-end" mt={1} mx={1}>
        <Button
          variant="contained"
          color="primary"
          backgroundColor="#006AFF"
          onClick={navigateToEmployees}
        >
          More
        </Button>
      </Box>
      {/* </Box> */}
      </Box>
      {/* <DynamicTable columns={employeeColumns} data={employees} title="Employee" handleOpenDialog={handleOpenDialog} /> */}
    </>
  );
}

export default Table;
