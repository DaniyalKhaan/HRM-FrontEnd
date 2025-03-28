import React, { useContext } from "react";
import {
  Box,
} from "@mui/material";
import { FiArrowDownRight } from "react-icons/fi"; // React Icons
import { DepartmentContext } from "../../departments/context";
import Card from "../../../utilities/cards/Card"


export default function Departments() {

    const { departments } = useContext(DepartmentContext);
  
  const noOfDeps = departments.length;




  return (
    <Card
    title="Total Departments"
    mainNo = {noOfDeps}
    cardText = "Department structure expanded recently"
    />

  );
}
