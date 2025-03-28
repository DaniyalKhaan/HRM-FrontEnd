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
import { useEmployees } from "../../employees/context";

function Donut_Card() {
  // Get employees from context
  const { employees } = useEmployees();

  // If employees are not loaded yet, render a fallback (or a loader)
  if (!employees) return <Typography>Loading...</Typography>;

  // Calculate counts for each status
  const totalEmployees = employees.length;
  const activeCount = employees.filter((emp) => emp.status === "active").length;
  const inactiveCount = employees.filter(
    (emp) => emp.status === "inactive"
  ).length;
  const resignedCount = employees.filter(
    (emp) => emp.status === "resigned"
  ).length;
  const terminatedCount = employees.filter(
    (emp) => emp.status === "terminated"
  ).length;

  // Prepare data for the PieChart (donut)
  const pieData = [
    { value: activeCount, color: "#0066FF" },
    { value: inactiveCount, color: "#44D16D" },
    { value: resignedCount, color: "#FF3B30" },
    { value: terminatedCount, color: "#F39C12" }, // Custom color for terminated
  ];

  // Prepare legend data to display below the chart
  const legendData = [
    { label: "Total", value: totalEmployees, color: "#000000" },
    { label: "Active", value: activeCount, color: "#0066FF" },
    { label: "Inactive", value: inactiveCount, color: "#44D16D" },
    { label: "Resigned", value: resignedCount, color: "#FF3B30" },
    { label: "Terminated", value: terminatedCount, color: "#F39C12" },
  ];

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
        {/* Header: Title and Chip */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" fontWeight="bold" color="text.secondary">
            Employee Status
          </Typography>
          <Chip
            label="Today"
            size="small"
            sx={{ bgcolor: "#F4F5F7", fontWeight: "bold" }}
          />
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        <Box>
          {/* Donut Chart Centered */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", bgcolor: "red" }}
          >
            <PieChart
              series={[
                {
                  data: pieData,
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
            {legendData.map((item) => (
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
                <Typography variant="body2" fontWeight="bold">
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Donut_Card;
