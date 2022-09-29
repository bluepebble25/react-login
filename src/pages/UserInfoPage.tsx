/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ErrorMessage } from '../components/ErrorMessage';
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
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const res = await AuthApi.getUserInfo();
      setUserInfo(res.data);
    } catch (e) {
      const err = e as AxiosError;
      const res = err.response as AxiosResponse;
      const message = res.data.message;
      setError(message);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthApi.logout();
    navigate('/');
  };

  return (
    <div className="wrapper" css={loginBackgroundStyle}>
      <Card>
        <Card.Title>User Information</Card.Title>
        {error ? (
          <Form onSubmit={onSubmit}>
            <ErrorMessage>{error}</ErrorMessage>
            <Button type="submit" color="yellow">
              Back
            </Button>
          </Form>
        ) : (
          <Form onSubmit={onSubmit}>
            <UserInfo title="id" value={userInfo && userInfo.id} />
            <UserInfo title="name" value={userInfo && userInfo.name} />
            <UserInfo title="account" value={userInfo && userInfo.account} />
            <UserInfo title="level" value={userInfo && userInfo.level} />

            <Button type="submit" color="yellow">
              Logout
            </Button>
          </Form>
        )}
      </Card>
    </div>
  );
}

const loginBackgroundStyle = css`
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default UserInfoPage;
