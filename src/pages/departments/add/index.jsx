import { useContext, useState,useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from "@mui/material";
import { DepartmentContext } from "../context";




const index = ({ open, onClose, mode = "create", initialData = null }) => {

  const {employees, addDepartment, updateDepartment} = useContext(DepartmentContext);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    managerId: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        description: initialData.description || "",
        managerId: (typeof initialData.managerId === 'object' ? initialData.managerId._id : initialData.managerId) || "",
      });
    } else {
      setFormData({ name: "", description: "", managerId: "" });
    }
  }, [initialData, open]);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (formData.name.trim().split(" ").length < 2) tempErrors.name = "Please enter at least two words.";
    if (formData.description && formData.description.length < 20) {
      tempErrors.description = "Description must be at least 20 characters long";
    }
    if (!formData.managerId) tempErrors.managerId = "Please select a Manager";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      if (mode === "update") {
        updateDepartment(initialData._id, formData);
        console.log("Department Updated:", formData);
      } else {
        addDepartment(formData);
        console.log("Department Created:", formData);
      }
      onClose();
    }
  };
  

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{mode === "update" ? "Update Department" : "Create Department"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          margin="dense"
          error={!!errors.name}
          helperText={errors.name}
          />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={3}
          value={formData.description}
          onChange={handleChange}
          error={!!errors.description}
          helperText={errors.description}
          margin="dense"
        />
        <TextField
          label="Select Manager"
          name="managerId"
          select
          fullWidth
          value={formData.managerId}
          onChange={handleChange}
          error={!!errors.managerId}
          helperText={errors.managerId}
          margin="dense"
        >
          {employees.map((emp) => (
            <MenuItem key={emp._id} value={emp._id}>
              {`${emp.firstName} ${emp.lastName}`}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">{mode === "update" ? "Update" : "Create"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default index;
