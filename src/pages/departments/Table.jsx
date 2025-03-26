import { Box } from '@mui/system';
import React, { useState, useContext } from 'react';
import DynamicTable from '../../components/DynamicTable';
import { DepartmentContext } from "./context";
import DetailsDialog from '../../components/DetailsDialog';
import Swal from "sweetalert2";
import {
  showSuccessAlert,
  showErrorAlert,
} from "../../utilities/alerts/alertService";

function Table() {
    const { departments, getDepartmentById, selectedDepartment, removeDepartment, setSelectedDepartment } = useContext(DepartmentContext);
    const [dialogOpen, setDialogOpen] = useState(false);
    


      const departmentsColumns = [
        { field: "name", headerName: "Deparment" },
        { field: "manager", headerName: "Manager" },
      ];
    
      const data = departments.map((dep) => ({
        id: dep._id,
        name: dep.name,
        manager: `${dep.managerId.firstName}  ${dep.managerId.lastName}`,
      }));

      const sections = [
        {
          title: "Department Information",
          fields: [
            { label: "Department Name", key: "name" },
            { label: "Description", key: "description" },
            {
              label: "Created At",
              key: "createdAt",
              render: (data) => new Date(data.createdAt).toLocaleDateString(),
            },
            {
              label: "Updated At",
              key: "updatedAt",
              render: (data) => new Date(data.updatedAt).toLocaleDateString(),
            },
          ],
        },
        {
          title: "Manager Information",
          fields: [
            {
              label: "Full Name",
              key: "managerId",
              render: (data) =>
                `${data.managerId.firstName} ${data.managerId.lastName}`,
            },
            { label: "Email", key: "managerId.email" },
            { label: "Phone", key: "managerId.phone" },
            { label: "CNIC", key: "managerId.cnic" },
            { label: "Position", key: "managerId.position" },
            {
              label: "Joining Date",
              key: "managerId.joiningDate",
              render: (data) =>
                new Date(data.managerId.joiningDate).toLocaleDateString(),
            },
            { label: "Status", key: "managerId.status" },
          ],
        },
        {
          title: "Manager Address",
          fields: [
            { label: "Street", key: "managerId.address.street" },
            { label: "City", key: "managerId.address.city" },
            { label: "State", key: "managerId.address.state" },
            { label: "Zipcode", key: "managerId.address.zipcode" },
          ],
        },
      ];
      

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
                removeDepartment(id);
                showSuccessAlert("Employee deleted successfully!");
              }
            });
          };


  const handleOpenDialog = (id) => {
    const department = departments.find(dep => dep._id === id);
    console.log(`ID ID ID: ${id}`);
    console.log(`department:`, department);
    setSelectedDepartment(department);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedDepartment(null);
  };

    

  return (
    <Box>
        <DynamicTable 
        data={data} 
        columns={departmentsColumns} 
        showEyeIcon={true} 
        showEmployeeActions={true}
        onViewDetails={handleOpenDialog}
        // onEdit={() => console.log("Editing")}
        onDelete={handleDelete}
          />

        <DetailsDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title="Department Details"
        data={selectedDepartment}
        sections={sections}
      />
    </Box>
  )
}

export default Table