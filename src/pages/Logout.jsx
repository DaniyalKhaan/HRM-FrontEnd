// src/components/Logout.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const useLogout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear token & context
    navigate('/login'); // Redirect to login page
  };

  return handleLogout;
};

export default useLogout;
