import React from "react";
import { Stack } from "@mui/system";
import Employees from "./Employees";
import Departments from "./Departments";
import Donut_Card from "./Donut";
import Label from "./Heading";
import Card from "../../../utilities/cards/Card";
import { EmployeesProvider } from "../../employees/context";
import { DepartmentProvider } from "../../departments/context";

function Cards() {
  return (
    <Stack
      spacing={2.6}
      direction="column"
      justifyContent="center"
      bgcolor="#F8F7F1"
      ml={2.2}
    >
      <Label />

      <EmployeesProvider>
        <Employees />
      </EmployeesProvider>

      <DepartmentProvider>
        <Departments />
      </DepartmentProvider>

      <EmployeesProvider>
        <Donut_Card />
      </EmployeesProvider>

      <Card
        title="Total Managers"
        mainNo="4"
        cardText="All managers are actively overseeing their teams"
      />

      <Card
        title="Total Full Stack Employees"
        mainNo="11"
        cardText="No new additions to the full-stack team this month"
      />
    </Stack>
  );
}

export default Cards;
