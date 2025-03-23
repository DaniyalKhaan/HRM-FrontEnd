import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from "@mui/material";
import { FiFilter } from "react-icons/fi";
import { EmployeesProvider } from "../../Employees/context";
import DashboardTable from "./employees_table/Table";

// Dummy Data
const carStatusData = [
  { id: 1, carNo: "6465", driver: "Alex Noman", status: "Completed", statusColor: "green", earning: 35.44 },
  { id: 2, carNo: "5665", driver: "Razib Rahman", status: "Pending", statusColor: "blue", earning: 0.0 },
  { id: 3, carNo: "1755", driver: "Luke Norton", status: "In route", statusColor: "red", earning: 23.5 },
];

function StatusTable() {
  const [data, setData] = useState(carStatusData);

  // Filter functionality placeholder
  const handleFilter = () => {
    alert("Filter functionality coming soon!");
  };

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
      <CardContent>
        {/* Header with Filter Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            Live Car Status
          </Typography>
          <IconButton onClick={handleFilter}>
            <FiFilter />
          </IconButton>
        </div>

        <EmployeesProvider>
            <DashboardTable />
        </EmployeesProvider>
      </CardContent>
    </Card>
  );
}

export default StatusTable;
