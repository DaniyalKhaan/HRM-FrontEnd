import React, { useState } from "react";
import {
  IconButton,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  CircularProgress,
  Alert,
  DialogActions,
  Button,
} from "@mui/material";
import { FiEye } from "react-icons/fi";
import { useEmployees } from "./context"; // Import the context hook
import EmployeeActions from "./EmployeeAction";

const EmployeesTable = () => {
  const { employees, loading, error } = useEmployees(); // Consume context
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (employee) => {
    setSelectedEmployee(employee);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedEmployee(null);
  };

  // Handle loading and error states
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee._id}>
                <TableCell>{`${employee.firstName} ${employee.lastName}`}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Tooltip title="View Details">
                    <IconButton
                      onClick={() => handleOpenDialog(employee)}
                      color="primary"
                    >
                      <FiEye />
                    </IconButton>
                  </Tooltip>
                  <EmployeeActions
                    employee={employee}
                    onEdit={(emp) => handleEdit(emp)} // Pass edit handler
                    onDelete={(id) => handleDelete(id)} // Pass delete handler
                  />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog (Popup) for Employee Details */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Employee Details</DialogTitle>
        <DialogContent dividers>
          {selectedEmployee && (
            <>
              <Typography>
                <strong>Name:</strong> {selectedEmployee.firstName}{" "}
                {selectedEmployee.lastName}
              </Typography>
              <Typography>
                <strong>Email:</strong> {selectedEmployee.email}
              </Typography>
              <Typography>
                <strong>Phone:</strong> {selectedEmployee.phone}
              </Typography>
              <Typography>
                <strong>CNIC:</strong> {selectedEmployee.cnic}
              </Typography>
              <Typography>
                <strong>Gender:</strong> {selectedEmployee.gender}
              </Typography>
              <Typography>
                <strong>Position:</strong> {selectedEmployee.position}
              </Typography>
              <Typography>
                <strong>Department:</strong>{" "}
                {selectedEmployee.departmentId?.name}
              </Typography>
              <Typography>
                <strong>Salary:</strong> {selectedEmployee.salary}
              </Typography>
              <Typography>
                <strong>Joining Date:</strong>{" "}
                {new Date(selectedEmployee.joiningDate).toDateString()}
              </Typography>
              <Typography>
                <strong>Status:</strong> {selectedEmployee.status}
              </Typography>
              <Typography>
                <strong>Address:</strong>{" "}
                {`${selectedEmployee.address.street}, ${selectedEmployee.address.city}, ${selectedEmployee.address.state}, ${selectedEmployee.address.zipcode}`}
              </Typography>
              <Typography>
                <strong>Emergency Contact:</strong>{" "}
                {`${selectedEmployee.emergencyContact.name} (${selectedEmployee.emergencyContact.relationship}) - ${selectedEmployee.emergencyContact.phone}`}
              </Typography>
              <Typography>
                <strong>Leave Balance:</strong> Annual:{" "}
                {selectedEmployee.leaveBalance.annual}, Sick:{" "}
                {selectedEmployee.leaveBalance.sick}, Casual:{" "}
                {selectedEmployee.leaveBalance.casual}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            color="primary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeesTable;
