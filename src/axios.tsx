import axios from 'axios';

 const fetchApi = axios.defaults.withCredentials = true;

 export default fetchApi;
