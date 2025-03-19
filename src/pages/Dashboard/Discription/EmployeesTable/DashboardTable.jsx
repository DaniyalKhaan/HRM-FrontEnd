import React from 'react'
import DynamicTable from '../../../../components/DynamicTable'
import { useEmployees } from "../../../../pages/Employees/context"; // Import the context hook


function Table() {
      const { employees, loading, error } = useEmployees(); // Consume context
      const employeeColumns = [
        { field: "firstName", label: "Name" },
        { field: "lastName", label: "Email" },
        { field: "email", label: "Phone" },
        { field: "phone", label: "Position" },
      ];
    
  return (
    <>
    <DynamicTable columns={employeeColumns} data={employees} />
    {/* <DynamicTable columns={employeeColumns} data={employees} title="Employee" handleOpenDialog={handleOpenDialog} /> */}
    
    </>
  )
}

export default Table