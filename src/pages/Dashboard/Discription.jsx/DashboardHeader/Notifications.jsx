import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import { FiBell } from "react-icons/fi";

const dummyNotifications = [
  { id: 1, message: "New booking received" },
  { id: 2, message: "Payment successful" },
  { id: 3, message: "Driver has arrived" },
];

function Notifications() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Notification Bell with Badge */}
      <IconButton
  onClick={handleClick}
  sx={{
    outline: 'none', // For safety
    boxShadow: 'none', // Prevent any shadow
    '&:focus': { outline: 'none' }, // Remove focus outline
    '&:focus-visible': { outline: 'none' }, // Remove focus-visible outline
    '&:active': { boxShadow: 'none' }, // Remove click shadow if any
  }}
>
  <Badge badgeContent={dummyNotifications.length} color="error">
    <FiBell size={20} color="#656575" />
  </Badge>
</IconButton>


      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Typography sx={{ p: 2, fontWeight: "bold" }}>Notifications</Typography>
        <Divider />
        {dummyNotifications.length > 0 ? (
          dummyNotifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleClose}>
              {notification.message}
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleClose}>No new notifications</MenuItem>
        )}
      </Menu>
    </>
  );
}

export default Notifications;
