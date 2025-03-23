import Swal from "sweetalert2";

export const showSuccessAlert = (message, callback) => {
  Swal.fire({
    title: "Success!",
    text: message,
    icon: "success",
    confirmButtonText: "OK",
    width: "300px",
    height: "100px",
    customClass: {
      popup: "small-swal-popup", // Apply custom class
    },
  }).then(() => {
    if (callback) callback(); // Execute callback after alert
  });
};

export const showErrorAlert = (message) => {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    confirmButtonText: "OK",
    width: "300px",
    height: "100px",
    customClass: {
      popup: "small-swal-popup", // Apply custom class
    },
  });
};
