/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { UserInfo } from '../components/UserInfo';
import { AuthApi } from '../lib/api/auth';

class UserInfoType {
  id: number;
  account: string;
  name: string;
  level: number;

  constructor(id: number, account: string, name: string, level: number) {
    this.id = id;
    this.account = account;
    this.name = name;
    this.level = level;
  }
}

function UserInfoPage() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await AuthApi.getUserInfo();
      console.log(res.data);
      setUserInfo(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = () => {
    AuthApi.logout();
    navigate('/');
  };

  return (
    <div className="wrapper" css={loginBackgroundStyle}>
      <Card>
        <Card.Title>User Information</Card.Title>
        <Form onSubmit={onSubmit}>
          <UserInfo title="id" value={userInfo && userInfo.id} />
          <UserInfo title="name" value={userInfo && userInfo.name} />
          <UserInfo title="account" value={userInfo && userInfo.account} />
          <UserInfo title="level" value={userInfo && userInfo.level} />

          <Button type="submit" color="yellow">
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
