//const URL = 'https://api-nodejs-todolist.herokuapp.com/user/login'

import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}