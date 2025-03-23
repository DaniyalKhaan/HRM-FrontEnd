import { Grid, TextField, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const JobDetailsStep = ({ formData, handleChange, errors }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          select
          label="Position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.position)}
          helperText={errors.position}
        >
          <MenuItem value="Software Engineer">Software Engineer</MenuItem>
          <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
          <MenuItem value="Backend Developer">Backend Developer</MenuItem>
          <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
          <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
          <MenuItem value="Project Manager">Project Manager</MenuItem>
          <MenuItem value="Quality Assurance Engineer">
            Quality Assurance Engineer
          </MenuItem>
          <MenuItem value="Business Analyst">Business Analyst</MenuItem>
          <MenuItem value="Tech Lead">Tech Lead</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          select
          label="Department"
          name="departmentId"
          value={formData.departmentId}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.position)}
          helperText={errors.position}
        >
          <MenuItem value="677bd85e5d0e81bbd0831c81">App Development</MenuItem>
          <MenuItem value="677bd8865d0e81bbd0831c8d">Android Development</MenuItem>
          <MenuItem value="677cc2c8595114ef21f3431e">Web Development</MenuItem>
          <MenuItem value="677d0371517f4cbf506253f3">App Development</MenuItem>
          <MenuItem value="677d04b2517f4cbf5062544c">App Development</MenuItem>

        </TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
          fullWidth
          required
          error={Boolean(errors.salary)}
          helperText={errors.salary}
        />
      </Grid>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={6}>
          <DatePicker
            label="Joining Date"
            name="joiningDate"
            value={formData.joiningDate ? dayjs(formData.joiningDate) : null}
            onChange={(newValue) =>
              handleChange({
                target: {
                  name: "joiningDate",
                  value: newValue?.format("YYYY-MM-DD"),
                },
              })
            }
            format="YYYY-MM-DD"
            slotProps={{
              textField: {
                fullWidth: true,
                required: true,
                error: Boolean(errors.joiningDate),
                helperText: errors.joiningDate,
              },
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <DatePicker
            label="Date of Birth"
            name="dob"
            value={formData.dob ? dayjs(formData.dob) : null}
            onChange={(newValue) =>
              handleChange({
                target: { name: "dob", value: newValue?.format("YYYY-MM-DD") },
              })
            }
            format="YYYY-MM-DD"
            slotProps={{
              textField: {
                fullWidth: true,
                required: true,
                error: Boolean(errors.dob),
                helperText: errors.dob,
              },
            }}
          />
        </Grid>
      </LocalizationProvider>


    </Grid>
  );
};

export default JobDetailsStep;
