import axios from 'axios'
import { baseURL } from './constants/Constans';

const instance = axios.create({
   baseURL:baseURL
   
  });
  export default instance