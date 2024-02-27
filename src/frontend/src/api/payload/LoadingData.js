import axios from 'axios';
import BASE_URL from '..';
import { getQueryParamStringFromObject } from './FetchUtils';

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

export const fetchCarts = async (queries) => {
  let url = `${BASE_URL}/cart/cart-only/`;

  url += getQueryParamStringFromObject(queries);

  const { data } = await axios.get(url);
  return data;
};

export const createCart = async (cart) => {
  const { data } = await axios.post(`${BASE_URL}/cart/cart-only/`, cart);
  return data;
};

export const updateCart = async (id, cart) => {
  const { data, status } = await axios.patch(
    `${BASE_URL}/cart/cart-only/${id}/`,
    cart,
  );
  console.log(data);
  console.log(status);
  return data;
};

export const createCartQuantityItem = async (CQI) => {
  const { data } = await axios.post(
    `${BASE_URL}/cart/cart-book-quantity/`,
    CQI,
  );
  return data;
};
