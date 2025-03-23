import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Box,
} from "@mui/material";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

export default function StatsCard({
  title = "Income",
  chipLabel = "Today",
  mainAmount = "$9460.00",
  changeDirection = "down", // or "up"
  changePercentage = "1.5%",
  comparedText = "Compared to $9940 yesterday",
  lastWeekLabel = "Last week Income",
  lastWeekAmount = "$25658.00",
  cardWidth = 288,
  cardHeight = 190,
}) {
  // Determine arrow icon and color based on changeDirection
  const ArrowIcon = changeDirection === "up" ? FiArrowUpRight : FiArrowDownRight;
  const arrowColor = changeDirection === "up" ? "green" : "red";

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 1,
        width: cardWidth,
        height: cardHeight,
        p: 1,
        bgcolor: "#FDFDFD",
      }}
    >
      <CardContent>
        {/* Title Row */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" fontWeight="bold" color="text.secondary">
            {title}
          </Typography>
          <Chip
            label={chipLabel}
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
          justifyContent="space-between"
          mt={1}
          mb={1}
        >
          <Typography variant="h4" fontWeight="bold">
            {mainAmount}
          </Typography>
          <Box display="flex" alignItems="center" mr={1}>
            <ArrowIcon color={arrowColor} />
            <Typography variant="body2" color="error" fontWeight="bold" ml={0.5}>
              {changePercentage}
            </Typography>
          </Box>
        </Box>

        {/* Comparison Text */}
        <Typography variant="body2" color="text.secondary">
          {comparedText}
        </Typography>

        {/* Last Week Income */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography variant="body2" fontWeight="bold" color="text.secondary">
            {lastWeekLabel}
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="text.secondary">
            {lastWeekAmount}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
