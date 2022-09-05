/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface CardTitleProps {
  fontSize?: string;
  children?: React.ReactNode;
}

function CardTitle({ fontSize, children }: CardTitleProps) {
  return <h2 css={CardTitleStyle(fontSize)}>{children}</h2>;
}

const CardTitleStyle = (fontSize: undefined | string) => css`
  text-align: center;
  font-size: ${fontSize && fontSize};
`;

export default CardTitle;
