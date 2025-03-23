import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
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
import EmployeeActions from "../pages/Employees/Action";
import PropTypes from "prop-types";

function DynamicTable({
  columns,
  data,
  showEyeIcon = false,
  showEmployeeActions = false,
  showPagination = true,
  onViewDetails,
  onEdit,
  onDelete,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={2}
        sx={{
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.field}
                  sx={{ bgcolor: "gray", fontSize: "16px", fontWeight: "bold" }}
                >
                  {col.headerName}
                </TableCell>
              ))}
              {(showEyeIcon || showEmployeeActions) && (
                <TableCell
                  sx={{
                    width: "120px",
                    pl: 6,
                    bgcolor: "gray",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow
                  key={row.id || rowIndex}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(196, 196, 196, 0.53)", // Light gray background on hover
                      transition: "background-color 0.2s ease-in-out",
                    },
                  }}
                >
                  {columns.map((col) => (
                    <TableCell align="start" key={col.field}>
                      {row[col.field]}
                    </TableCell>
                  ))}

                  {(showEyeIcon || showEmployeeActions) && (
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: "4px",
                        "& .MuiIconButton-root": {
                          fontSize: "20px",
                          padding: "4px",
                          marginInline: "6px",
                        },
                      }}
                    >
                      {/* Conditionally render Eye icon */}
                      {showEyeIcon && onViewDetails && (
                        <Tooltip title="View Details">
                          <IconButton
                            onClick={() => onViewDetails(row.id)}
                            color="primary"
                          >
                            <FiEye />
                          </IconButton>
                        </Tooltip>
                      )}

                      {/* Conditionally render EmployeeActions */}
                      {showEmployeeActions && onEdit && onDelete && (
                        <EmployeeActions
                          employee={row}
                          onEdit={(emp) => onEdit(emp)}
                        />
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        {showPagination && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f1f1f1",
              borderTop: "1px solid #ddd",
              fontWeight: "bold",
              "& .MuiTablePagination-root": {
                fontWeight: "bold",
                fontSize: "16px",
              },
              "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                {
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#333",
                },
              "& .MuiSelect-select, & .MuiTablePagination-actions": {
                fontWeight: "bold",
              },
            }}
          />
        )}
      </TableContainer>
    </>
  );
}

DynamicTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DynamicTable;
