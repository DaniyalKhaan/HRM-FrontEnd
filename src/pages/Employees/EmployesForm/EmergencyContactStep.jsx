// components/EmployeesForm/EmergencyContactStep.jsx
import { Grid, MenuItem, TextField } from "@mui/material";

const EmergencyContactStep = ({ formData, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Contact Name"
          name="emergencyContact.name"
          value={formData.emergencyContact.name}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["emergencyContact.name"])}
          helperText={errors["emergencyContact.name"]}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Contact Phone"
          name="emergencyContact.phone"
          value={formData.emergencyContact.phone}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["emergencyContact.phone"])}
          helperText={errors["emergencyContact.phone"]}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          label="Relationship"
          name="emergencyContact.relationship"
          value={formData.emergencyContact.relationship}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["emergencyContact.relationship"])}
          helperText={errors["emergencyContact.relationship"]}
        >
          <MenuItem value="Parent">Parent</MenuItem>
          <MenuItem value="Spouse">Spouse</MenuItem>
          <MenuItem value="Sibling">Sibling</MenuItem>
          <MenuItem value="Friend">Friend</MenuItem>
          <MenuItem value="Colleague">Colleague</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

export default EmergencyContactStep;
