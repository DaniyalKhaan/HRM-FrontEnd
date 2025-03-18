// components/EmployeesForm/EmployeesForm.jsx
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";


// Import the step components
import BasicInfoStep from "./BasicInfoStep";
import AddressStep from "./AddressStep";
import JobDetailsStep from "./JobDetailsStep";
import EmergencyContactStep from "./EmergencyContactStep";
import ReviewStep from "./ReviewStep";
import LeaveStep from "./LeavesStep";

const steps = [
  "Basic Info",
  "Address",
  "Job Details",
  "Emergency Contact",
  "Assign Leaves",
  "Review & Submit",
];

const EmployeesForm = ({ open, onClose, onSubmit }) => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cnic: "",
    address: { street: "", city: "", state: "", zipcode: "" },
    dob: "",
    gender: "Male",
    position: "",
    departmentId: "677bd85e5d0e81bbd0831c81",
    salary: "",
    joiningDate: "",
    status: "active",
    emergencyContact: { name: "", phone: "", relationship: "" },
    leaveBalance: { annual: 0, sick: 0, casual: 0 },
  });

  // Universal change handler for nested fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Validation logic for each step
  const validateStep = () => {


    let stepErrors = {};
    switch (step) {
      case 0:
        if (!formData.firstName || formData.firstName.trim().split(" ").length < 2) {
          stepErrors.firstName = "Please enter full name (first and last name).";
        }
        if (!formData.email.trim()) {
          stepErrors.email = "Email is required";
        } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
          stepErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim()) {
          stepErrors.phone = "Phone is required";
        } else if (!/^(?:\+92|92)3[0-9]{9}$|^03[0-9]{9}$/.test(formData.phone)) {
          stepErrors.phone = "Please enter a valid phone number";
        }
        
        if (!formData.cnic.trim()) {
          stepErrors.cnic = "CNIC is required";
        } else if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic)) {
          stepErrors.cnic = "Please enter a valid CNIC (e.g., 12345-1234567-1)";
        }
        
        break;
      case 1:
        if (!formData.address.street.trim())
          stepErrors["address.street"] = "Street is required";
        if (!formData.address.city.trim())
          stepErrors["address.city"] = "City is required";
        if (!formData.address.state.trim())
          stepErrors["address.state"] = "State is required";
        if (!formData.address.zipcode.trim())
          stepErrors["address.zipcode"] = "Zipcode is required";
        break;
      case 2:
        if (!formData.position.trim())
          stepErrors.position = "Position is required";
        if (!formData.salary)
          stepErrors.salary = "Salary is required";
        if (!formData.dob)
          stepErrors.dob = "Date of Birth is required";
        if (!formData.joiningDate)
          stepErrors.joiningDate = "Joining Date is required";
        break;
      case 3:
        if (!formData.emergencyContact.name.trim())
          stepErrors["emergencyContact.name"] = "Contact Name is required";

        if (!formData.emergencyContact.phone.trim()) {
          stepErrors["emergencyContact.phone"] = "Phone is required";
        } else if (!/^(?:\+92|92)3[0-9]{9}$|^03[0-9]{9}$/.test(formData.emergencyContact.phone)) {
          stepErrors["emergencyContact.phone"] = "Please enter a valid phone number";
        }
        if (!formData.emergencyContact.relationship.trim())
          stepErrors["emergencyContact.relationship"] = "Relationship is required";
        break;
        case 4:
          if (formData.leaveBalance.annual > 10) {
            stepErrors["leaveBalance.annual"] = "Annual Leave cannot exceed 10";
          }
          if (formData.leaveBalance.sick > 5) {
            stepErrors["leaveBalance.sick"] = "Sick Leave cannot exceed 5";
          }
          if (formData.leaveBalance.casual > 5) {
            stepErrors["leaveBalance.casual"] = "Casual Leave cannot exceed 5";
          }
          break;
      default:
        break;
    }
    return stepErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("here")
    const [firstName, ...lastNameArr] = formData.firstName.trim().split(" ");

    formData.firstName = firstName;
    formData.lastName = lastNameArr.join(" ");
    console.log(`Last name before submitting Form '${formData.lastName}'`);
    onSubmit(formData);
    // Reset form and step after submission if needed
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      cnic: "",
      address: { street: "", city: "", state: "", zipcode: "" },
      dob: "",
      gender: "Male",
      position: "",
      departmentId: "677bd85e5d0e81bbd0831c81",
      salary: "",
      joiningDate: "",
      status: "active",
      emergencyContact: { name: "", phone: "", relationship: "" },
      leaveBalance: { annual: 0, sick: 0, casual: 0 },
    });
    setStep(0);
    onClose();
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicInfoStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 1:
        return (
          <AddressStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
        case 2:
        return (
          <JobDetailsStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
            />
        );
      case 3:
        return (
          <EmergencyContactStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 4:
        return (
          <LeaveStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 5:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Employee</DialogTitle>
      <DialogContent>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {renderStepContent(step)}
        </Grid>
      </DialogContent>
      <DialogActions>
        {step > 0 && (
          <Button onClick={handleBack} color="secondary">
            Back
          </Button>
        )}
        {step < steps.length - 1 ? (
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} variant="contained" color="success">
            Submit
          </Button>
        )}
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmployeesForm;
