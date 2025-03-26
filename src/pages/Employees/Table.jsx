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
import Swal from "sweetalert2";
import {
  showSuccessAlert,
  showErrorAlert,
} from "../../utilities/alerts/alertService";
import EmployeesForm from "./add";

const EmployeesTable = () => {
  const {
    employees,
    loading,
    error,
    removeEmployee,
    fetchEmployeeById,
    setSelectedEmployee,
    updateEmployee,
  } = useEmployees(); // Consume context


  const [viewEmployee, setViewEmployee] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formMode, setFormMode] = useState("Edit");
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      width: "300px", // Reduce width
      customClass: {
        popup: "small-swal-popup",
      }, // Apply custom class
    }).then((result) => {
      if (result.isConfirmed) {
        removeEmployee(id);
        showSuccessAlert("Employee deleted successfully!");
      }
    });
  };

  const fetchSingleEmployee = async (id) => {
    try {
      const employee = await fetchEmployeeById(id);

      console.log(employee);
      // Set the selected employee in the context
      setSelectedEmployee(employee);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = async (id) => {
    await fetchSingleEmployee(id); // Wait for the employee data to be set in context
    setFormMode("Update");
    setIsFormOpen(true);
  };

  const handleOpenDialog = (id) => {
    const employee = employees.find((emp) => emp._id === id);
    console.log(`ID ID ID: ${id}`);
    console.log(`Employee:`, employee);
    setViewEmployee(employee);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setViewEmployee(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Daaaaaaaaaaaaaaaaataaaaaaaaaaaaaaaaa:", data);

    if (data._id) {
      console.log(`Id is present: here it is:  ${data._id}`);
    }

    updateEmployee( data._id , data);
  
    handleCloseForm();
  };

  // Handle loading and error states
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      {/* <DynamicTable columns={columns1} data={data1} /> */}
      <DynamicTable
        columns={employeeColumns}
        data={data}
        showEyeIcon={true}
        showEmployeeActions={true}
        showPagination={true}
        onViewDetails={handleOpenDialog}
        onEdit={handleUpdate}
        onDelete={handleDelete}
      />

      <DetailsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Employee Details"
        data={viewEmployee}
        sections={sections}
      />

      {isFormOpen && (
        <EmployeesForm
          open={isFormOpen}
          onClose={handleCloseForm}
          onSubmit={handleFormSubmit}
          Mode={formMode}
        />
      )}
    </>
  );
};

export default EmployeesTable;
