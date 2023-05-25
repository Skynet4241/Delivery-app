import axios from 'axios';

const BASE_URL = 'https://delivery-app-back-end-skynet4241.onrender.com';

export const getRestaurantList = async () => {
  const result = await axios.get(`${BASE_URL}/api/restaurant/all`);

  return result;
};
