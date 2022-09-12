/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { ErrorMessage } from '../components/ErrorMessage';
import { AuthApi } from '../lib/api/auth';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({ account: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      navigate('/userinfo');
    }
  }, [navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Input의 name, value를 가져온다.
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthApi.login(loginInfo.account, loginInfo.password);
      navigate('/userinfo');
    } catch (e) {
      const err = e as AxiosError;
      const res = err.response as AxiosResponse;
      const message = res.data.message;
      setError(message);
    }
  };

  return (
    <div className="wrapper" css={loginBackgroundStyle}>
      <Card>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={onSubmit}>
          <div>
            <Input
              type="text"
              name="account"
              placeholder="ID"
              icon={faUser}
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              icon={faLock}
              onChange={onChange}
            />
          </div>
          <label css={labelStyle}>
            <input type="checkbox" style={{ margin: '0 5px 0 0' }} />
            Remember me
          </label>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit" color="blue">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}

const loginBackgroundStyle = css`
  background: linear-gradient(115deg, #56d8e4 10%, #9f01ea 90%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const labelStyle = css`
  display: inline-block;
  margin: 10px 0 10px 0;
`;

export default LoginPage;
