import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const getRestaurantMenu = async shop => {
  const result = await axios.get(`${BASE_URL}/restaurant/allmenu/${shop}`);

  return result;
};
