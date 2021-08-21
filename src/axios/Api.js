import axios from 'axios';

const Api = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
  headers: {
    Accept: 'application/json',
  },
});

export default Api;
