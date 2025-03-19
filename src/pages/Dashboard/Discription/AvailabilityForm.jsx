import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";

function AvailabilityForm() {
  const [car, setCar] = useState("");
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());
  const [viewMode, setViewMode] = useState("date"); // 'date' or 'month'
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCheckAvailability = () => {
    console.log("Checking availability for:", {
      car,
      date: date.format("YYYY-MM-DD"),
      time: time.format("HH:mm"),
    });
    alert(
      `Checking availability for ${car} on ${date.format(
        "YYYY-MM-DD"
      )} at ${time.format("HH:mm")}`
    );
  };

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 2, p: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Car Availability
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-evenly" gap={2}>
  {/* Car Number Dropdown */}
  <Select
    value={car}
    onChange={(e) => setCar(e.target.value)}
    displayEmpty
    size="small"
    sx={{
      minWidth: 140,
      height: 40,
      "& .MuiOutlinedInput-root": {
        height: "40px", // Match height with others
        fontSize: "14px",
        "& .MuiOutlinedInput-input": {
          padding: "8px 10px", // Adjust padding for alignment
        },
      },
    }}
  >
    <MenuItem value="">Car number</MenuItem>
    <MenuItem value="ABC-123">ABC-123</MenuItem>
    <MenuItem value="XYZ-789">XYZ-789</MenuItem>
  </Select>

  {/* Date Picker */}
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      views={viewMode === "date" ? ["year", "month", "day"] : ["year", "month"]}
      label={viewMode === "date" ? "Select Date" : "Select Month"}
      value={selectedDate ? dayjs(selectedDate) : null}
      onChange={(newValue) => {
        if (newValue) {
          const formattedValue =
            viewMode === "date"
              ? newValue.format("YYYY-MM-DD")
              : newValue.format("YYYY-MM");
          setSelectedDate(formattedValue);
        } else {
          setSelectedDate(null);
        }
      }}
      slotProps={{
        textField: {
          variant: "outlined",
          InputLabelProps: { shrink: true },
          sx: {
            minWidth: 220,
            height: "40px",
            m: 0, // Remove vertical margins
            background: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              height: "40px", // Match height with others
              fontSize: "14px",
              "& input": {
                height: "24px",
                padding: "8px 10px",
                display: "flex",
                alignItems: "center",
              },
              "& fieldset": { borderColor: "#1968B2" },
              "&:hover fieldset": { borderColor: "#1968B2" },
              "&.Mui-focused fieldset": { borderColor: "#1968B2" },
            },
            "& .MuiSvgIcon-root": {
              color: "#1968B2",
            },
          },
        },
      }}
    />
  </LocalizationProvider>

  {/* Check Button */}
  <Button
    variant="contained"
    color="primary"
    sx={{
      height: "40px", // Match height with others
      minWidth: "100px",
      textTransform: "none", // Optional: Keep button text normal case
      fontWeight: "bold", // Optional: Make button text bold
    }}
    onClick={handleCheckAvailability}
  >
    Check
  </Button>
</Box>

      </CardContent>
    </Card>
  );
}

export default AvailabilityForm;
