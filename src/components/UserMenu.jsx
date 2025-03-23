import { useState } from "react";
import { Avatar, Stack, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // Retrieve username from localStorage
  const username = localStorage.getItem("username") || "Guest";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
<Stack direction="column" alignItems="start" spacing={1}>
      {/* Label for better UI clarity */}
      {/* <Typography variant="body2" fontWeight={500} color="textPrimary">
        Profile
      </Typography> */}

      {/* User Icon with smaller size */}
      <IconButton onClick={handleClick} sx={{ color: "#fff", p: 0 }}>
        <Avatar sx={{ bgcolor: "#2196f3", width: 32, height: 32 }}> {/* ✅ Reduced Avatar size */}
          <FaUserCircle size={20} /> {/* ✅ Reduced Icon size */}
        </Avatar>
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { borderRadius: 2, boxShadow: 3, p: 1, minWidth: 180, bgcolor: "#fff" }, // ✅ Better UI spacing
        }}
      >
        {/* Display Username */}
        <MenuItem disableRipple sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" fontWeight={600} color="textSecondary">
            {username || "Guest"}
          </Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default UserMenu;