import axios from 'axios';

const API_KEY = '33612276-ad71642198adbedbb6cf9f47f';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: API_KEY,
  per_page: 12,
  image_type: 'photo',
  orintation: 'horizontal',
};

export const getImages = async (searchQuery, page) => {
  const { data } = await axios.get(`/?q=${searchQuery}&page=${page}`);

  return data;
};

const api = {
  getImages,
};

export default api;
