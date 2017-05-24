import axios from 'axios';

const baseURL = 'http://localhost:8080';

// export const checkAuthentication = () => axios(`${baseURL}/api/check_authenticate`);

export const checkAuthentication = () => axios({
  method: 'GET',
  url: `${baseURL}/api/auth/check_authenticate`,
});

export const getRegister = info => axios({
  method: 'POST',
  data: info,
  url: `${baseURL}/api/auth/register`,
});

export const confirmUser = info => axios({
  method: 'PUT',
  data: info,
  url: `${baseURL}/api/auth/confirmuser`,
});

export const getLogin = info => axios({
  method: 'POST',
  data: info,
  url: `${baseURL}/api/auth/login`,
});

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
