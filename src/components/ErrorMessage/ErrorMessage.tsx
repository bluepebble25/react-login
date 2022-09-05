import React from 'react';

interface ErrorMessageProps {
  children: React.ReactNode;
}

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p>{children}</p>;
}

export default ErrorMessage;
