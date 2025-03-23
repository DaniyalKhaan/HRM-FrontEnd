// components/Employees/EmployeeActions.jsx
import { useEmployees } from "./context";
import Swal from "sweetalert2";
import {
  showSuccessAlert,
  showErrorAlert,
} from "../../utilities/alerts/alertService";

import { IconButton, Tooltip } from "@mui/material";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useState } from "react";
import EmployeesForm from "./add/Form";
import { ObjectId } from "bson";

const EmployeeActions = ({ employee, onEdit }) => {
  const { fetchEmployeeById } = useEmployees();
  const { removeEmployee } = useEmployees();
  const { setSelectedEmployee } = useEmployees();
  const { updateEmployee } = useEmployees();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("Edit"); // Default to Create mode

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

  const handleOpenCreate = async (id) => {
    await fetchSingleEmployee(id); // Wait for the employee data to be set in context
    setFormMode("Update");
    setIsFormOpen(true);
  };

  const handleOpenUpdate = () => {
    setFormMode("Update");
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log("Submitted Daaaaaaaaaaaaaaaaataaaaaaaaaaaaaaaaa:", data);

    updateEmployee(data);
  
    handleCloseForm();
  };

  // if (data.departmentId) {
  //   console.log(`Before Converting Department Id: ${data.departmentId}`, typeof data.departmentId);
  //   data.departmentId = new ObjectId(data.departmentId).toString();
  //   console.log(`After Converting Department Id: ${data.departmentId}`, typeof data.departmentId);
  // }



  return (
    <>
      <Tooltip title="Edit">
        <IconButton
          onClick={() => handleOpenCreate(employee.id)}
          color="primary"
        >
          <FiEdit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton onClick={() => handleDelete(employee.id)} color="error">
          <FiTrash />
        </IconButton>
      </Tooltip>

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

export default EmployeeActions;
