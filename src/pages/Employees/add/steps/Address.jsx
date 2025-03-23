import { Grid, TextField, MenuItem } from "@mui/material";

const AddressSetup = ({ formData, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label="Street"
          name="address.street"
          value={formData.address.street}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["address.street"])}
          helperText={errors["address.street"]}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          label="City"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["address.city"])}
          helperText={errors["address.city"]}
        >
          <MenuItem value="Karachi">Karachi</MenuItem>
          <MenuItem value="Lahore">Lahore</MenuItem>
          <MenuItem value="Islamabad">Islamabad</MenuItem>
          <MenuItem value="Rawalpindi">Rawalpindi</MenuItem>
          <MenuItem value="Faisalabad">Faisalabad</MenuItem>
          <MenuItem value="Peshawar">Peshawar</MenuItem>
          <MenuItem value="Quetta">Quetta</MenuItem>
          <MenuItem value="Multan">Multan</MenuItem>
          <MenuItem value="Sialkot">Sialkot</MenuItem>
          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          label="State"
          name="address.state"
          value={formData.address.state}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["address.state"])}
          helperText={errors["address.state"]}
        >
          <MenuItem value="Punjab">Punjab</MenuItem>
          <MenuItem value="KPK">KPK</MenuItem>
          <MenuItem value="Sindh">Sindh</MenuItem>
          <MenuItem value="Balochistan">Balochistan</MenuItem>
          <MenuItem value="Azaad Kashmir">Azaad Kashmir</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Zipcode"
          name="address.zipcode"
          value={formData.address.zipcode}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors["address.zipcode"])}
          helperText={errors["address.zipcode"]}
        />
      </Grid>
    </Grid>
  );
};

export default AddressSetup;
