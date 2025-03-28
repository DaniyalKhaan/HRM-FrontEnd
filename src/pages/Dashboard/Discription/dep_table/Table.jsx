import React, {  useContext } from "react";
import DynamicTable from "../../../../components/DynamicTable";
import { DepartmentContext } from "../../../departments/context";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";


function Table() {
  const { departments } = useContext(DepartmentContext);
  const navigate = useNavigate();

  const navigateToDepartments = () => {
    navigate("/departments");
  };

  const departmentsColumns = [
    { field: "name", headerName: "Deparment" },
    { field: "manager", headerName: "Manager" },
  ];

  const data = departments.slice(0, 3).map((dep) => ({
    id: dep._id,
    name: dep.name,
    manager: `${dep.managerId.firstName}  ${dep.managerId.lastName}`,
  }));
  return (

        <>
          <Box>
            <Typography variant="h5" gutterBottom>
              Deparments
            </Typography>
    
            <DynamicTable
              columns={departmentsColumns}
              data={data}
              showPagination={false}
              showSearch={false}
              showActions={false}
            />
          {/* <Box sx={{mt:2, px:1.5}}> */}
          <Box display="flex" justifyContent="flex-end" mt={1} mx={1}>
            <Button
              variant="contained"
              color="primary"
              backgroundColor="#006AFF"
              onClick={navigateToDepartments}
            >
              More
            </Button>
          </Box>
          </Box>
        </>

  );
}

export default Table;
