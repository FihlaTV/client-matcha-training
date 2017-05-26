import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
  },
}));

export const checkAuthentication = () =>
  api({
    method: 'GET',
    url: '/auth/check_authenticate',
  });

export const getRegister = info =>
  api({
    method: 'POST',
    data: info,
    url: '/auth/register',
  });

export const confirmUser = info =>
  api({
    method: 'PUT',
    data: info,
    url: '/auth/confirmuser',
  });

export const getLogin = info =>
  api({
    method: 'POST',
    data: info,
    url: '/auth/login',
  }).then((response) => {
    if (response.data.status === 'success') {
      localStorage.setItem('jwtToken', response.data.token);
    }
    return response;
  });

export const getForgetPassword = info =>
  api({
    method: 'POST',
    data: info,
    url: '/auth/forgetpassword',
  });

export const getResetPassword = info =>
  api({
    method: 'PUT',
    data: info,
    url: '/auth/resetpassword',
  });
