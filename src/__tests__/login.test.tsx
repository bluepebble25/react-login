import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

interface loginInfoProps {
  id: string;
  password: string;
}

export const login = (loginInfo: loginInfoProps) => {
  render(<App />, { wrapper: BrowserRouter });
  const id = screen.getByPlaceholderText('ID');
  const password = screen.getByPlaceholderText('Password');
  const button = screen.getByRole('button', { name: /Login/i });

  fireEvent.change(id, { target: { value: loginInfo.id } });
  fireEvent.change(password, { target: { value: loginInfo.password } });
  fireEvent.click(button);
};

test("잘못된 아이디/비밀번호로 로그인하면 '아이디 혹은 비밀번호가 올바르지 않습니다.' 메세지를 출력한다'", async () => {
  const loginInfo = { id: 'wrongid', password: '1111' };
  login(loginInfo);

  const ErrorMessage = await screen.findByText(
    /아이디 혹은 비밀번호가 올바르지 않습니다./i
  );
  expect(ErrorMessage).toBeInTheDocument();
});

test("아이디나 비밀번호의 길이가 11글자 이상이면 '입력값을 확인해주세요.'라는 메세지를 출력한다.", async () => {
  const loginInfo = { id: '일이삼사오육칠팔구십1', password: '1111' };
  login(loginInfo);

  const ErrorMessage = await screen.findByText(/입력값을 확인해주세요./i);
  expect(ErrorMessage).toBeInTheDocument();
});
