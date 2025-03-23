import React from "react";
import { Card, CardContent, Typography, Divider, Chip, Box } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi"; // React Icons

export default function Expense_Card() {
  return (
    <Card
    elevation={3}

    sx={{
      borderRadius: 1,
      boxShadow: 1,
      width: 288,
      height: 190,
      p: 1,
      bgcolor: "#FDFDFD",
    }}
  >
    <CardContent>
      {/* Title Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.secondary"
        >
          Expenses
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
          $ 5660.00
        </Typography>
        <Box display="flex" alignItems="center" mr={1}>
          <FiArrowUpRight color="green" />
          <Typography
            variant="body2"
            color="green"
            fontWeight="bold"
            ml={0.5}
          >
            2.5%
          </Typography>
        </Box>
      </Box>

      {/* Comparison Text */}
      <Typography variant="body2" color="text.secondary">
        Compared to $5240 yesterday
      </Typography>

      {/* Last Week Income */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <Typography
          variant="body2"
          fontWeight="bold"
          color="text.secondary"
        >
          Last week Expense
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="text.secondary"
        >
          $22658.00
        </Typography>
      </Box>
    </CardContent>
  </Card>
  );
}
