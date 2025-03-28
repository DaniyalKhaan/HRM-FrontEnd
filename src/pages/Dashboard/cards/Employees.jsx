import React from "react";
import {
  Box,
} from "@mui/material";
import { FiArrowDownRight } from "react-icons/fi"; // React Icons
import { useEmployees } from "../../employees/context";
import Card from "../../../utilities/cards/Card"


export default function Employees() {

  const { employees } = useEmployees();
  const noOfEmployees = employees.length;




  return (
    <Card
    title="Total Employees"
    mainNo = {noOfEmployees}
    cardText = "Total workforce grew by 2% this week"
    />

  );
}
