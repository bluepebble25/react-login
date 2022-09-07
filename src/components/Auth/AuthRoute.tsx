import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';

interface AuthRouteProps {
  children: React.ReactNode;
}

const isAuthed = sessionStorage.getItem('accessToken');

function AuthRoute({ children }: AuthRouteProps) {
  return isAuthed ? <>{children}</> : <Navigate replace to="/" />;
}

export default AuthRoute;
