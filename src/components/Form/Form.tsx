/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface FormProps {
  children: React.ReactNode;
}

function Form({ children }: FormProps) {
  return <form css={FormStyle}>{children}</form>;
}

const FormStyle = css``;

export default Form;
