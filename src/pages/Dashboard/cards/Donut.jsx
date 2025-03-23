import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Box,
  Stack,
} from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const HiringVsCancelData = [
  { value: 54, color: "#0066FF" }, // No label inside the donut
  { value: 20, color: "#44D16D" },
  { value: 26,  color: "#FF3B30" },
];

function Donut_Card() {
  return (
    <Card
    elevation={3}

      sx={{
        borderRadius: 2,
        width: 288,
        p: 1,
        bgcolor: "#FDFDFD",
      }}
    >
      <CardContent>
        {/* Title */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" fontWeight="bold" color="text.secondary">
            Hire vs Cancel
          </Typography>
          <Chip
            label="Today"
            size="small"
            sx={{ bgcolor: "#F4F5F7", fontWeight: "bold" }}
          />
        </Box>

        {/* Underline */}
        <Divider sx={{ my: 2 }} />

        {/* Donut Chart Centered */}
        <Box display="flex" justifyContent="center">
          <PieChart
            series={[
              {
                data: HiringVsCancelData,
                innerRadius: 50, // Creates donut effect
                outerRadius: 70,
                paddingAngle: 0, // Removes slice spacing
                cornerRadius: 0, // Ensures smooth edges
              },
            ]}
            
            width={200}
            height={150}
          />
        </Box>

        {/* Legend Below the Donut Chart */}
        <Stack spacing={1} mt={2}>
          {[
            { label: "Total Hired", value: 54, color: "#0066FF", isIncrease: true },
            { label: "Total Canceled", value: 20, color: "#44D16D", isIncrease: true },
            { label: "Total Pending", value: 26, color: "#FF3B30", isIncrease: false },
          ].map((item) => (
            <Box
              key={item.label}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: item.color,
                    borderRadius: "50%",
                    mr: 1,
                  }}
                />
                <Typography variant="body2">{item.label}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body2" fontWeight="bold">
                  {item.value}%
                </Typography>
                {item.isIncrease ? (
                  <FiArrowUp color="green" style={{ marginLeft: 4 }} />
                ) : (
                  <FiArrowDown color="red" style={{ marginLeft: 4 }} />
                )}
              </Box>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Donut_Card;
