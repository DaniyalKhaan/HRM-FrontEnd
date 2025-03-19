import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FiEye } from "react-icons/fi";
import EmployeeActions from "../pages/Employees/EmployeeAction";
import DetailsDialog from "./DetailsDialog";

function DynamicTable({ columns, data }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Open drawer with selected row data
  const handleOpenDrawer = (row) => {
    setSelectedRow(row);
    setDrawerOpen(true);
  };

  // Close drawer
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedRow(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              {columns.slice(0, 5).map((col) => (
                <TableCell key={col.field}>{col.label}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id || row.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(196, 196, 196, 0.53)", // Light gray background on hover
                    transition: "background-color 0.2s ease-in-out",
                  },
                }}
              >
                {columns.slice(0, 5).map((col) => (
                  <TableCell key={col.field}>{row[col.field] || "—"}</TableCell>
                ))}

                <TableCell>
                  <Tooltip title="View Details">
                    <IconButton
                      onClick={() => handleOpenDrawer()}
                      color="primary"
                    >
                      <FiEye />
                    </IconButton>
                  </Tooltip>
                  <EmployeeActions
                    employee={row}
                    onEdit={(emp) => handleEdit(emp)} // Pass edit handler
                    onDelete={(id) => handleDelete(id)} // Pass delete handler
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Drawer for Full Details */}
      <DetailsDialog
        open={drawerOpen}
        onClose={handleCloseDrawer}
        data={selectedRow}
        title="Full Details"
        // You can also pass a custom `sections` configuration here if needed.
      />
    </>
  );
}

export default DynamicTable;
