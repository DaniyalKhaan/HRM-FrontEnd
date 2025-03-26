import React from "react";
import AvailabilityForm from "./AvailabilityForm";
import StatusTable from "./StatusTable";
import { Stack } from "@mui/system";
import EarningSummaryGraph from "./EarningSummaryGraph";
import DashboardTable from "./employees_table/Table";
import DashboardHeader from "./header/Header";
import { EmployeesProvider } from "../../Employees/context";

function Main_Dashboard() {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      bgcolor="#F8F7F1"
      m={0}
      p={0}
    >
      <DashboardHeader />
      <AvailabilityForm />
      <EmployeesProvider>
          <DashboardTable />
      </EmployeesProvider>
      {/* <StatusTable /> */}
      <EarningSummaryGraph />
    </Stack>
  );
}

export default Main_Dashboard;
