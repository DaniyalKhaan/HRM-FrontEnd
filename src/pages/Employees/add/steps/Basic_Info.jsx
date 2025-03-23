import { Grid, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";

const BasicInfoStep = ({ formData, handleChange, errors }) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Full Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.phone)}
          helperText={errors.phone}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="CNIC"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.cnic)}
          helperText={errors.cnic}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.gender)}
          helperText={errors.gender}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

export default BasicInfoStep;
