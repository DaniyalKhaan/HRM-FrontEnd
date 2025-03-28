import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Settings, Info, Logout } from "@mui/icons-material";
import BadgeIcon from '@mui/icons-material/Badge';
import useLogout from '../pages/auth/Logout'; // adjust path if needed
import NfcIcon from '@mui/icons-material/Nfc';

const sidebarWidth = 180;

const pages = [
  { name: "Dashboard", path: "/", icon: <Home /> },
  { name: "Employees", path: "/employees", icon: <BadgeIcon /> },
  { name: "Departments", path: "/departments", icon: <NfcIcon /> },
  { name: "Users", path: "/users", icon: <Settings /> },
  { name: "Analytics", path: "/analytics", icon: <Info /> },
  { name: "Profile", path: "/profile", icon: <Home /> },
  { name: "Settings", path: "/settings", icon: <Settings /> },
];

export default function Sidebar() {
  const location = useLocation(); // Get current route
  const handleLogout = useLogout(); // Logout function

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
          bgcolor: "#1A1919",
        },
      }}
    >
      <Toolbar>
        <Typography
          sx={{
            color: "#FFFFFF",
            ml: 2,
            mr: 2,
            mt: 1,
            fontSize: "26px",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          HRM
        </Typography>
      </Toolbar>

      <List disablePadding sx={{ width: "100%" }}>
        {pages.map((page, index) => {
          const isActive = location.pathname === page.path; // Check if current path matches page path
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton
                component={Link}
                to={page.path}
                sx={{
                  mt: 2,
                  width: "100%",
                  py: "8px",
                  pl: "10px",
                  borderRadius: "4px",
                  position: "relative",
                  bgcolor: isActive ? "rgba(96, 130, 182, 0.8)" : "transparent", // Active background
                  "&:hover": {
                    bgcolor: "rgba(96, 130, 182, 0.6)", // Background color on hover
                    "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                      color: "#FFFFFF", // Change text & icon color to white on hover
                    },
                  },
                  "& > .MuiListItemIcon-root": {
                    color: isActive ? "#FFFFFF" : "#909692",
                    minWidth: "30px",
                  },
                  "& > .MuiListItemText-root": {
                    fontWeight: "regular",
                    color: isActive ? "#FFFFFF" : "#909692",
                    ml: "4px",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px", // Active line width
                    bgcolor: isActive ? "#FFFFFF" : "transparent", // Line color when active
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                  },
                }}
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} sx={{ pt: "3.5px" }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Logout button */}
      <ListItemButton
        onClick={handleLogout}
        sx={{
          px: "2px",
          py: "3px",
          ml: "20px",
          position: "absolute",
          bottom: 20,
          width: "80%",
          bgcolor: "#404040",
          borderRadius: "8px",
          "&:hover": {
            bgcolor: "rgba(96, 130, 182, 0.7)",
            "& > .MuiListItemIcon-root": { color: "#FFFFFF" },
            "& > .MuiListItemText-root": { color: "#FFFFFF" },
          },
        }}
      >
        <ListItemIcon sx={{ color: "#909692", minWidth: "30px", pl:"8px" }}>
          <Logout />
        </ListItemIcon>
        <ListItemText primary="Logout" sx={{ color: "#909692", pt: "3.5px" }} />
      </ListItemButton>
    </Drawer>
  );
}
