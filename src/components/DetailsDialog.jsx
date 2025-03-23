import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DetailsDialog = ({ open, onClose, title, data, sections }) => {

  const getNestedValue = (obj, path, defaultValue = "N/A") => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || defaultValue;
  };
  if (!data) return null; // or show a fallback message

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers >
        {sections.map((section, idx) => (
          <Accordion key={idx} >
            <AccordionSummary sx={{bgcolor: "#d3d3d3"}} expandIcon={<ExpandMoreIcon />} >
              <Typography >
                <strong>{section.title}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
              {section.fields.map((field, fidx) => (
                <Typography key={fidx}>
                  <strong>{field.label}:</strong>{" "}
                  {field.render ? field.render(data) : getNestedValue(data, field.key)}
                </Typography>
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
