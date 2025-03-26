import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DetailsDialog = ({ open, onClose, title, data, sections }) => {
  const getNestedValue = (obj, path, defaultValue = "N/A") => {
    return (
      path.split(".").reduce((acc, part) => acc && acc[part], obj) ||
      defaultValue
    );
  };
  if (!data) return null; // or show a fallback message

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth sx={{ bgcolor: "rgba(96, 130, 182, 0.2)" }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {sections.map((section, idx) => (
          <Accordion key={idx}>
            <AccordionSummary
              sx={{ bgcolor: "rgba(96, 130, 182, 0.4)" }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                <strong>{section.title}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {section.fields.map((field, fidx) => (
                <Box
                  key={fidx}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: 1, // margin bottom for spacing between rows
                    backgroundColor: "rgba(96, 130, 182, 0.2)", // subtle background highlight
                    p: 1, // padding inside the box
                    borderRadius: 1, // rounded corners
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "bold",
                      minWidth: "120px", // ensures labels have a consistent width
                      color: "rgb(96, 130, 230)",
                    }}
                  >
                    {field.label}:
                  </Typography>
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    {field.render
                      ? field.render(data)
                      : getNestedValue(data, field.key)}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsDialog;
