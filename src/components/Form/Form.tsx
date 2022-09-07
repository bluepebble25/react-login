/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function Form({ children, onSubmit }: FormProps) {
  return (
    <form css={FormStyle} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

const FormStyle = css``;

export default Form;
