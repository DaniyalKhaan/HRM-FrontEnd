import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { borderRadius } from "@mui/system";

function SearchBar({ placeholder = "Search here" }) {
  return (
    <TextField
      elevation={3}
      variant="outlined"
      size="small"
      placeholder={placeholder}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <FiSearch color="gray" />
          </InputAdornment>
        ),
      }}
      sx={{
        maxWidth: 300,
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px", // This applies border-radius correctly
          boxShadow: 2, // Adds a slight shadow
        },
      }}
    />
  );
}

export default SearchBar;
