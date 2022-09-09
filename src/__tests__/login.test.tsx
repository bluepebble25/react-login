import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test("잘못된 아이디/비밀번호로 로그인하면 '아이디 혹은 비밀번호가 올바르지 않습니다.\" 문구를 출력한다'", async () => {
  render(<App />, { wrapper: BrowserRouter });

  const loginInfo = { id: 'wrongid', password: '1111' };

  const id = screen.getByPlaceholderText('ID');
  const password = screen.getByPlaceholderText('Password');
  const button = screen.getByRole('button', { name: /Login/i });

  fireEvent.change(id, { target: { value: loginInfo.id } });
  fireEvent.change(password, { target: { value: loginInfo.password } });
  fireEvent.click(button);

  const ErrorMessage = await screen.findByText(
    /아이디 혹은 비밀번호가 올바르지 않습니다./i
  );
  expect(ErrorMessage).toBeInTheDocument();
});
