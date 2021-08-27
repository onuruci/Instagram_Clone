import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/'
var Bearer = 'Bearer '+ localStorage.getItem('token');
axios.defaults.headers.common = {'Authorization': Bearer}
export default axios;