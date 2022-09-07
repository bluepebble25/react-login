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

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({ account: '', password: '' });
  const [error, setError] = useState(false);
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
      const result = await AuthApi.login(loginInfo.account, loginInfo.password);
      console.log('result', result);
      navigate('/userinfo');
    } catch (e) {
      console.log(e);
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
          <label style={{ display: 'block' }}>
            <input type="checkbox" />
            Remember me
          </label>
          {error && <ErrorMessage>Incorrect ID or password</ErrorMessage>}
          <Button type="submit" color="blue">
            Login
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

export default LoginPage;
