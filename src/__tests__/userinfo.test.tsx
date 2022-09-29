import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import App from '../App';
import { login } from './login.test';

test('로그인에 성공하면 /userinfo로 이동해 유저 정보를 가져온다.', async () => {
  const loginInfo = { id: 'devbadak', password: '1234' };
  login(loginInfo);

  expect(await screen.findByText(/foo/i)).toBeInTheDocument();
});

test('유효하지 않은 토큰을 가지고 /userinfo에 접근하려고 하면 에러 메시지와 돌아가기 버튼을 띄운다.', async () => {
  render(<App />, { wrapper: BrowserRouter });
  document.cookie = 'accessToken=123';
  window.location.href = 'userinfo';
  expect(await screen.findByText(/접근할 수 없습니다./i)).toBeInTheDocument();
  expect(await screen.findByText(/Back/i)).toBeInTheDocument();
});
