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
  if (!data) return null; // or show a fallback message

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {sections.map((section, idx) => (
          <Accordion key={idx}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <strong>{section.title}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {section.fields.map((field, fidx) => (
                <Typography key={fidx}>
                  <strong>{field.label}:</strong>{" "}
                  {field.render ? field.render(data) : data[field.key] || "N/A"}
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
