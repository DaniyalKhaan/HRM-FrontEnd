import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const DetailDrawer = ({ open, onClose, data, title, sections }) => {
  // If no sections are provided, create a default section by listing all key/value pairs.
  const defaultSections =
    data &&
    Object.entries(data).map(([key, value]) => ({
      title: key,
      fields: [
        {
          label: key,
          key,
          // If value is an object, convert it to a JSON string; otherwise, just display the value.
          value: typeof value === "object" ? JSON.stringify(value) : value,
        },
      ],
    }));

  // Function to render a field’s value. If a field has a custom valueFormatter, use it.
  const renderFieldValue = (field, data) => {
    if (field.valueFormatter) {
      return field.valueFormatter(data);
    }
    // If a field has a preset value (from defaultSections) use that,
    // otherwise, try to access it via the key.
    return field.hasOwnProperty("value") ? field.value : data[field.key] || "—";
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 2 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">{title || "Details"}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Render sections */}
        {(sections || defaultSections)?.map((section, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {section.fields?.map((field, idx) => (
                <Typography key={idx} sx={{ mb: 1 }}>
                  <strong>{field.label}:</strong>{" "}
                  {renderFieldValue(field, data)}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
};

export default DetailDrawer;
