import axios from 'axios';

const BASE_URL = 'https://delivery-app-back-end-skynet4241.onrender.com';

export const getRestaurantMenu = async shop => {
  const result = await axios.get(`${BASE_URL}/api/restaurant/allmenu/${shop}`);

  return result;
};
