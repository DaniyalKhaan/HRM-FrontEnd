import { useContext, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from "@mui/material";
import { DepartmentContext } from "./context";




const index = ({ open, onClose }) => {

  const {employees} = useContext(DepartmentContext);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dropdownValue: "",
  });

  const [errors, setErrors] = useState({});

  const dropdownOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.dropdownValue) tempErrors.dropdownValue = "Please select an option";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form Submitted:", formData);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create Department</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          margin="dense"
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          margin="dense"
        />
        <TextField
          label="Select Manager"
          name="dropdownValue"
          select
          fullWidth
          value={formData.dropdownValue}
          onChange={handleChange}
          error={!!errors.dropdownValue}
          helperText={errors.dropdownValue}
          margin="dense"
        >
          {employees.map((emp) => (
            <MenuItem key={emp._id} value={emp._id}>
              {`${emp.firstName} "" ${emp.lastName}`}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default index;
