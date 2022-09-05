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
  background-color: ${palette.white};
  padding: 30px;
`;

const Card = Object.assign(CardMain, {
  Title: CardTitle,
});

export default Card;
