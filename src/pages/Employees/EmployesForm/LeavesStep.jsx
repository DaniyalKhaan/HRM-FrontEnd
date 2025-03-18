import { Grid, TextField } from "@mui/material";

const LeaveStep = ({ formData, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          label="Annual Leave"
          name="leaveBalance.annual"
          type="number"
          value={formData.leaveBalance.annual}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["leaveBalance.annual"])}
          helperText={errors["leaveBalance.annual"]}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Sick Leave"
          name="leaveBalance.sick"
          type="number"
          value={formData.leaveBalance.sick}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["leaveBalance.sick"])}
          helperText={errors["leaveBalance.sick"]}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Casual Leave"
          name="leaveBalance.casual"
          type="number"
          value={formData.leaveBalance.casual}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["leaveBalance.casual"])}
          helperText={errors["leaveBalance.casual"]}
        />
      </Grid>
    </Grid>
  );
};

export default LeaveStep;
