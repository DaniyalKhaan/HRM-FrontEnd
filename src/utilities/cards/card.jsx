import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Box,
} from "@mui/material";

export default function StatsCard({
  title = "",
  chipLabel = "Today",
  mainNo = "",
  cardText = "",
  cardWidth = 288,
  cardHeight = 190,
}) {

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
            {mainNo}
          </Typography>

        </Box>

        {/* Comparison Text */}
        <Typography variant="body2" fontWeight="bold" color="text.secondary">
          {cardText}
        </Typography>

        {/* Last Week Income */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >

        </Box>
      </CardContent>
    </Card>
  );
}
