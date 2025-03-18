// components/Employees/EmployeeActions.jsx
import { useEmployees } from "./context";

import { IconButton, Tooltip } from "@mui/material";
import { FiEdit, FiTrash } from "react-icons/fi";

const EmployeeActions = ({ employee, onEdit, onDelete }) => {
  const { removeEmployee } = useEmployees();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      removeEmployee(id);
    }
  };
  return (
    <>
      <Tooltip title="Edit">
        <IconButton onClick={() => onEdit(employee)} color="primary">
          <FiEdit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton onClick={() => handleDelete(employee._id)} color="error">
          <FiTrash />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default EmployeeActions;
