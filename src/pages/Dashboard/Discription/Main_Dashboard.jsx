import React from "react";
import AvailabilityForm from "./AvailabilityForm";
import { Stack } from "@mui/system";
import EarningSummaryGraph from "./EarningSummaryGraph";
import EmployeesTable from "./employees_table/Table";
import DepartmentTable from "./dep_table/Table";
import DashboardHeader from "./header/Header";
import { EmployeesProvider } from "../../Employees/context";
import { DepartmentProvider } from "../../departments/context";

function Main_Dashboard() {
  return (
    <Stack
      spacing={4}
      direction="column"
      justifyContent="center"
      bgcolor="#F8F7F1"
      m={0}
      p={0}
    >
      <DashboardHeader />

      <AvailabilityForm />

      <EmployeesProvider>
        <EmployeesTable />
      </EmployeesProvider>

      {/* <StatusTable /> */}

      <DepartmentProvider>
        <DepartmentTable />
      </DepartmentProvider>
      <EarningSummaryGraph />
    </Stack>
  );
}

export default Main_Dashboard;
