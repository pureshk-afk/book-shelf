import axios from 'axios';
import BASE_URL from '..';

export const fetchPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/post/`);
  return data;
};

export const fetchBookById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/shelf/book/${id}`);
  return data;
};

export const fetchCategoryById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/shelf/category/${id}`);
  return data;
};
