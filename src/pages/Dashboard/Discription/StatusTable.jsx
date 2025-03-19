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

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Car No.</TableCell>
                <TableCell>Driver</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Earning</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{String(index + 1).padStart(2, "0")}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ bgcolor: "#F5F5F5", p: 1, borderRadius: 1 }}>
                      {row.carNo}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.driver}</TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: row.statusColor,
                          marginRight: 6,
                        }}
                      ></div>
                      {row.status}
                    </div>
                  </TableCell>
                  <TableCell>${row.earning.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" size="small">
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default StatusTable;
