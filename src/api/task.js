const URL = 'https://api-nodejs-todolist.herokuapp.com/task';

import axios from 'axios';

export const GetUserTasks = (token) => {
  return axios.get(URL + '/register', { headers: { Authorization: `Bearer ${token}` } });
}
