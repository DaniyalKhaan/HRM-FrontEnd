// components/EmployeesForm/ReviewStep.jsx
import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";

const ReviewStep = ({ formData }) => {
  return (
    <Card variant="outlined" sx={{ mt: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ mb: 2, color: "primary.main" }}>
          Review Your Information
        </Typography>

        {/* Basic Info */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Basic Information
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Name:</strong> {formData.firstName} {formData.lastName}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Email:</strong> {formData.email}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Phone:</strong> {formData.phone}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>CNIC:</strong> {formData.cnic}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Date of Birth:</strong> {formData.dob}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Gender:</strong> {formData.gender}
            </Typography>
          </Grid>
        </Grid>

        {/* Address */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Address
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Street:</strong> {formData.address.street}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>City:</strong> {formData.address.city}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>State:</strong> {formData.address.state}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Zipcode:</strong> {formData.address.zipcode}
            </Typography>
          </Grid>
        </Grid>

        {/* Job Details */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Job Details
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Position:</strong> {formData.position}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Department ID:</strong> {formData.departmentId}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Salary:</strong> {formData.salary}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Joining Date:</strong> {formData.joiningDate}
            </Typography>
          </Grid>
        </Grid>

        {/* Emergency Contact */}
        <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Emergency Contact
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Contact Name:</strong> {formData.emergencyContact.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Contact Phone:</strong> {formData.emergencyContact.phone}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Relationship:</strong> {formData.emergencyContact.relationship}
            </Typography>
          </Grid>
        </Grid>

        {/* Optional Info */}
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Optional Information
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Status:</strong> {formData.status}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <strong>Leave Balance:</strong> Annual: {formData.leaveBalance.annual}, Sick: {formData.leaveBalance.sick}, Casual: {formData.leaveBalance.casual}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReviewStep;
