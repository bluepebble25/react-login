import { screen } from '@testing-library/react';
import { login } from './login.test';

test('로그인에 성공하면 /userinfo로 이동해 유저 정보를 가져온다.', async () => {
  const loginInfo = { id: 'devbadak', password: '1234' };
  login(loginInfo);

  expect(await screen.findByText(/foo/i)).toBeInTheDocument();
});
