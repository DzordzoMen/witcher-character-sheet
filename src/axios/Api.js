import axios from 'axios';

const qs = require('qs');

const Api = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { indices: false }),
});

export default Api;
