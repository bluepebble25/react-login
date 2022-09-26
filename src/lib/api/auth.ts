import axios from '../core/axios';

export class AuthApi {
  static async login(account: string, password: string) {
    const res = await axios.post('/auth/login', {
      account: account,
      password: password,
    });
    document.cookie = `accessToken=${res.data.accessToken}`;
    return res;
  }

  static async logout() {
    const res = axios.get('/auth/logout');
    document.cookie = 'accessToken=; max-age=-1';

    return res;
  }

  static async getUserInfo() {
    const res = axios.get('/v1/users/me');
    return res;
  }
}
