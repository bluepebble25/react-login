/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { UserInfo } from '../components/UserInfo';

function UserInfoPage() {
  return (
    <div className="wrapper" css={loginBackgroundStyle}>
      <Card>
        <Card.Title>User Information</Card.Title>
        <Form>
          <UserInfo title="id" value="1" />
          <UserInfo title="name" value="야옹이" />
          <UserInfo title="account" value="imcat" />
          <UserInfo title="level" value="1" />

          <Button type="button" color="yellow">
            Logout
          </Button>
        </Form>
      </Card>
    </div>
  );
}

const loginBackgroundStyle = css`
  background-color: coral;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UserInfoPage;
