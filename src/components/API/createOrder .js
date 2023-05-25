import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const createOrder = async orderData => {
  const result = await axios.post(`${BASE_URL}/shopping-cart/order`, orderData);
  return result.data;
};
