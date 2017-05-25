import { setAuthorizationToken } from '../Api/auth';

export const Logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
};

// export default { Logout };
