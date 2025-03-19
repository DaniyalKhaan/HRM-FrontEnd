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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FiEye } from "react-icons/fi";
import { useEmployees } from "./context"; // Import the context hook
import EmployeeActions from "./EmployeeAction";
import DynamicTable from "../../components/DynamicTable"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const EmployeesTable = () => {
  const { employees, loading, error } = useEmployees(); // Consume context
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const employeeColumns = [
    { field: "firstName", label: "Name" },
    { field: "lastName", label: "Email" },
    { field: "email", label: "Phone" },
    { field: "phone", label: "Position" },
  ];


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
    {/* <DynamicTable /> */}
    <DynamicTable columns={employeeColumns} data={employees} title="Employee" handleOpenDialog={handleOpenDialog} />


    <div>--------------------------------------------------------------------------------------------------</div>
    {/* <DynamicTable /> */}
    {/* <DynamicTable columns={employeeColumns} data={employees} /> */}


    <div>--------------------------------------------------------------------------------------------------</div>



      {/* <TableContainer component={Paper}
      >
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
              <TableRow key={employee._id}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(196, 196, 196, 0.53)', // Light gray background on hover
                  transition: 'background-color 0.2s ease-in-out',
                },
              }}
              >
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      {/* Dialog (Popup) for Employee Details */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
      <DialogTitle>Employee Details</DialogTitle>
      <DialogContent dividers>
        {selectedEmployee && (
          <>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Basic Information</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography><strong>Name:</strong> {selectedEmployee.firstName} {selectedEmployee.lastName}</Typography>
                <Typography><strong>Email:</strong> {selectedEmployee.email}</Typography>
                <Typography><strong>Phone:</strong> {selectedEmployee.phone}</Typography>
                <Typography><strong>Gender:</strong> {selectedEmployee.gender}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Job Details</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography><strong>Position:</strong> {selectedEmployee.position}</Typography>
                <Typography><strong>Department:</strong> {selectedEmployee.departmentId?.name}</Typography>
                <Typography><strong>Salary:</strong> {selectedEmployee.salary}</Typography>
                <Typography><strong>Joining Date:</strong> {new Date(selectedEmployee.joiningDate).toDateString()}</Typography>
                <Typography><strong>Status:</strong> {selectedEmployee.status}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Address</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{`${selectedEmployee.address.street}, ${selectedEmployee.address.city}, ${selectedEmployee.address.state}, ${selectedEmployee.address.zipcode}`}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Emergency Contact</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{`${selectedEmployee.emergencyContact.name} (${selectedEmployee.emergencyContact.relationship}) - ${selectedEmployee.emergencyContact.phone}`}</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography><strong>Leave Balance</strong></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Annual: {selectedEmployee.leaveBalance.annual}, Sick: {selectedEmployee.leaveBalance.sick}, Casual: {selectedEmployee.leaveBalance.casual}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default EmployeesTable;



{/* <Table
employees={employees}
onView={handleView}
onEdit={handleEdit}
onDelete={handleDelete}
/> */}