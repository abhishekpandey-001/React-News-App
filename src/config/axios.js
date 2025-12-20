import axios from 'axios';

const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 1000,
});

export default instance;


 