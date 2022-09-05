import React from 'react';

interface UserInfoProps {
  title: React.ReactNode;
  value: React.ReactNode;
}

function UserInfo({ title, value }: UserInfoProps) {
  return (
    <dl>
      <dt>{title}</dt>
      <dd>{value}</dd>
    </dl>
  );
}

export default UserInfo;
