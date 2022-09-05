/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Input } from '../components/Input';
import { ErrorMessage } from '../components/ErrorMessage';

function LoginPage() {
  return (
    <div className="wrapper" css={loginBackgroundStyle}>
      <Card>
        <Card.Title>Login</Card.Title>
        <Form>
          <div>
            <Input placeholder="ID" icon={faUser} />
            <Input placeholder="Password" icon={faLock} />
          </div>
          <label style={{ margin: 0 }}>
            <input type="checkbox" />
            Remember me
          </label>
          <ErrorMessage>Incorrect ID or password</ErrorMessage>
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
