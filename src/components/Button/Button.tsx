/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../lib/styles/palette';

type buttonColorType = 'red' | 'blue' | 'yellow';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  color: buttonColorType;
  children: React.ReactNode;
}

function Button({ type, color, children }: ButtonProps) {
  return (
    <button type={type} css={ButtonStyle(color)}>
      {children}
    </button>
  );
}

const ButtonStyle = (color: buttonColorType) => css`
  font-size: 20px;
  font-weight: 500px;
  color: ${palette.white};
  background-color: ${palette[color]};
  border: none;
  cursor: pointer;
`;

export default Button;
