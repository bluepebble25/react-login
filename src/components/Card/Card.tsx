/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import palette from '../../lib/styles/palette';
import CardTitle from './CardTitle';

interface CardProps {
  children?: React.ReactNode;
}

function CardMain({ children }: CardProps) {
  return <div css={cardStyle}>{children}</div>;
}

const cardStyle = css`
  width: 365px;
  padding: 30px;
  border-radius: 5px;
  background-color: ${palette.white};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
`;

const Card = Object.assign(CardMain, {
  Title: CardTitle,
});

export default Card;
