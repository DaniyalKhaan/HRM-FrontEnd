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
import EmployeeActions from "./Action";
import DynamicTable from "../../components/DynamicTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DetailsDialog from "../../components/DetailsDialog";


const EmployeesTable = () => {
  const { employees, loading, error } = useEmployees(); // Consume context
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);



  const sections = [
    {
      title: "Personal Information",
      fields: [
        {
          label: "Full Name",
          key: "fullName",
          render: (data) => `${data.firstName} ${data.lastName}`,
        },
        { label: "Email", key: "email" },
        { label: "Phone", key: "phone" },
        { label: "CNIC", key: "cnic" },
        {
          label: "Date of Birth",
          key: "dob",
          render: (data) => new Date(data.dob).toLocaleDateString(),
        },
        { label: "Gender", key: "gender" },
      ],
    },
    {
      title: "Job Details",
      fields: [
        { label: "Position", key: "position" },
        {
          label: "Department",
          key: "departmentId",
          render: (data) => data.departmentId?.name || "N/A",
        },
        {
          label: "Salary",
          key: "salary",
          render: (data) => `$${data.salary.toLocaleString()}`,
        },
        {
          label: "Joining Date",
          key: "joiningDate",
          render: (data) => new Date(data.joiningDate).toLocaleDateString(),
        },
        { label: "Status", key: "status" },
      ],
    },
    {
      title: "Address",
      fields: [
        { label: "Street", key: "address.street" },
        { label: "City", key: "address.city" },
        { label: "State", key: "address.state" },
        { label: "Zipcode", key: "address.zipcode" },
      ],
    },
    {
      title: "Emergency Contact",
      fields: [
        { label: "Name", key: "emergencyContact.name" },
        { label: "Phone", key: "emergencyContact.phone" },
        { label: "Relationship", key: "emergencyContact.relationship" },
      ],
    },
    {
      title: "Leave Balance",
      fields: [
        { label: "Annual Leave", key: "leaveBalance.annual" },
        { label: "Sick Leave", key: "leaveBalance.sick" },
        { label: "Casual Leave", key: "leaveBalance.casual" },
      ],
    },
  ];

  const columns1 = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "department", headerName: "Department" },
    { field: "phone", headerName: "Phone" },
  ];

  const data1 = employees.map((emp) => ({
    id: emp._id, // Assuming `id` exists in employees
    name: emp.firstName + " " + emp.lastName,
    email: emp.email,
    department: emp.departmentId.name,
    phone: emp.phone,
  }));

  const columns2 = [
    { field: "productId", headerName: "Product ID" },
    { field: "productName", headerName: "Product Name" },
    { field: "price", headerName: "Price ($)" },
  ];


  const employeeColumns = [
    { field: "firstName", label: "Name" },
    { field: "email", label: "Email" },
    { field: "phone", label: "Phone" },
    { field: "position", label: "Position" },
  ];

  const handleOpenDialog = (id) => {
    const employee = employees.find(emp => emp._id === id);
    console.log(`ID ID ID: ${id}`);
    console.log(`Employee:`, employee);
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

      {/* <DynamicTable columns={columns1} data={data1} /> */}
      <DynamicTable
        columns={columns1}
        data={data1}
        showEyeIcon={true}
        showEmployeeActions={true}
        showPagination={true}
        onViewDetails={handleOpenDialog}
        onEdit={(employee) => console.log("Editing", employee)}
        onDelete={(id) => console.log("Deleting employee with ID:", id)}
      />

      <DetailsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Employee Details"
        data={selectedEmployee}
        sections={sections}
      />

    </>
  );
};

export default EmployeesTable;
