import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  children: React.ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const isAuthed = sessionStorage.getItem('accessToken');
  return isAuthed ? <>{children}</> : <Navigate replace to="/" />;
}

export default AuthRoute;
