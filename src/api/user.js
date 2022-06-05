const URL = 'https://api-nodejs-todolist.herokuapp.com/user'

import axios from 'axios';

export const userRegisterRequest = (data) => {
  return axios.post(URL + '/register', data);
}
