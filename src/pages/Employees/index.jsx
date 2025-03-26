import { useState } from "react";
import EmployeesTable from "./Table";
import EmployeeForm from "./add";
import { Button, Box, Typography } from "@mui/material";
import { useEmployees } from "./context";

const Employees = () => {
  const { addEmployee } = useEmployees(); // Assume you have addEmployee method in context
  const [openForm, setOpenForm] = useState(false);

  const handleAdd = (employeeData) => {
    addEmployee(employeeData);
  };

  return (
    <Box
      sx={{
        height: "100%",
        padding: "40px",
        color: "black",
        backgroundColor: "rgba(96, 130, 182, 0.2)",
      }}
    >
      <Box
        mb={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ backgroundColor: "rgba(96, 130, 182, 0.6)", padding: "10px" }}
      >
        <Typography variant="h6" fontWeight="bold">
          Employee Management
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenForm(true)}
          sx={{
            backgroundColor: "rgb(41, 93, 172)",
            "&:hover": {
              backgroundColor: "rgb(47, 74, 122)",
            },
          }}
        >
          Add Employee
        </Button>
      </Box>

      <Box sx={{ mt: 2, px: 1.5 }}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems={"center"}
          mb={-5}
          p={2}
        ></Box>
      </Box>

      <EmployeesTable />
      <EmployeeForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleAdd}
        Mode="Create"
      />
    </Box>
  );
};

export default Employees;
