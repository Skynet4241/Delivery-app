import axios from 'axios';

const BASE_URL = 'https://delivery-app-back-end-skynet4241.onrender.com';

export const createOrder = async orderData => {
  const result = await axios.post(
    `${BASE_URL}/api/shopping-cart/order`,
    orderData
  );
  return result.data;
};
