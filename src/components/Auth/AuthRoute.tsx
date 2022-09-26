import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../../lib/helper/cookie';

interface AuthRouteProps {
  children: React.ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const isAuthed = getCookie('accessToken');
  return isAuthed ? <>{children}</> : <Navigate replace to="/" />;
}

export default AuthRoute;
