/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface UserInfoProps {
  title: React.ReactNode;
  value: React.ReactNode;
}

function UserInfo({ title, value }: UserInfoProps) {
  return (
    <dl>
      <dt css={dtStyle}>{title} :</dt>
      <dd css={ddStyle}>{value}</dd>
    </dl>
  );
}

const dtStyle = css`
  display: inline-block;
  margin-right: 15px;
`;

const ddStyle = css`
  display: inline-block;
  margin-left: 0;
`;

export default UserInfo;
