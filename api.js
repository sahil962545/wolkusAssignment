import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export default axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: 'b41e5c3a570643a238392587412b9293'
    // api_key: process.env.REACT_APP_API_KEY,
  },
});