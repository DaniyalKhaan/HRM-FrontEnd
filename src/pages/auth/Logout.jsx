// src/components/Logout.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from "sweetalert2";
import { showSuccessAlert } from '../../utilities/alerts/alertService';

const useLogout = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {

        logout(); // Clear token & context
        showSuccessAlert("Logged out successfully!");
        navigate('/login'); // Redirect to login page
      }
    })
  };

  return handleLogout;
};

export default useLogout;
