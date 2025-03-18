import React from "react";
import AvailabilityForm from "./AvailabilityForm";
import StatusTable from "./StatusTable";
import { Stack } from "@mui/system";
import EarningSummaryGraph from "./EarningSummaryGraph";
import DashboardHeader from "./DashboardHeader/DashboardHeader";

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
      <StatusTable />
      <EarningSummaryGraph />
    </Stack>
  );
}

export default Main_Dashboard;
