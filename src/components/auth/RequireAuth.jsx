// src/components/auth/RequireAuth.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children, roles }) => {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  if (!user) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && !roles.includes(user.role)) {
    // If user role does not match the required roles, redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default RequireAuth;
