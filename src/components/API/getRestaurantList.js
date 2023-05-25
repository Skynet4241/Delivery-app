import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const getRestaurantList = async () => {
  const result = await axios.get(`${BASE_URL}/restaurant/all`);

  return result;
};
