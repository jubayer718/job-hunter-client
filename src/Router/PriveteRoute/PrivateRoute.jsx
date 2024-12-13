import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const {pathname} = useLocation();
  if (user) {
    return children;
  }
  return (
   <Navigate to="/signIn" state={pathname}></Navigate>
  );
};

export default PrivateRoute;