import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Box,
} from "@mui/material";
import { FiArrowDownRight } from "react-icons/fi"; // React Icons


export default function Income_Card() {



  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 1,
        width: 288,
        height: 190,
        p: 1,
        bgcolor: "#FDFDFD",
      }}
    >
      <CardContent>
        {/* Title Row */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" fontWeight="bold" color="text.secondary">
            Income
          </Typography>
          <Chip
            label="Today"
            size="small"
            sx={{
              bgcolor: "#F4F5F7",
              fontWeight: "bold",
              px: "4px",
              borderRadius: "1px",
            }}
          />
        </Box>

        {/* Underline */}
        <Divider sx={{ my: 2 }} />

        {/* Main Amount */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          mt={1}
          mb={1}
        >
          <Typography variant="h4" fontWeight="bold">
            {/* {console.log(`Name: ${employeeCount[0]?.firstName}`)} */}
            {"3"}
          </Typography>
          <Box display="flex" alignItems="center" mr={1}>
            <FiArrowDownRight color="red" />
            <Typography
              variant="body2"
              color="error"
              fontWeight="bold"
              ml={0.5}
            >
              1.5%
            </Typography>
          </Box>
        </Box>

        {/* Comparison Text */}
        <Typography variant="body2" color="text.secondary">
          Compared to $9940 yesterday
        </Typography>

        {/* Last Week Income */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography variant="body2" fontWeight="bold" color="text.secondary">
            Last week Income
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="text.secondary">
            $25658.00
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
