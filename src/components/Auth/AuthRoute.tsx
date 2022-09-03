import React from 'react';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  children: React.ReactNode;
}

const isAuthed = false;

function AuthRoute({ children }: AuthRouteProps) {
  return isAuthed ? <>{children}</> : <Navigate replace to="/" />;
}

export default AuthRoute;
