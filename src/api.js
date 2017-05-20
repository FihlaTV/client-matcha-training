import axios from 'axios';

const baseURL = 'http://localhost:8080';

const checkAuthentication = () => axios({
  method: 'GET',
  url: `${baseURL}/api/check_authenticate`,
});

export default {
  checkAuthentication,
};
