import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

function Label() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Updates time every second

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" flexDirection="column" alignItems="start" mt="0px" px={1.5}>
      {/* Heading */}
      <Typography variant="h5" fontWeight="medium" color="#525256" p={0} m={0}>
        Today Statistics
      </Typography>

      {/* Date & Time */}
      <Typography variant="body2" color="text.secondary">
        {currentDateTime.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default Label;
