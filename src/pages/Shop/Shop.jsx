import { getRestaurantList } from 'components/API/getRestaurantList';
import { useEffect, useState } from 'react';
import { ShopList, ShopWrap } from './Shop.styled';
import { useLocation } from 'react-router-dom';

export const Shop = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchRestaurantList = async () => {
      try {
        const result = await getRestaurantList();
        setRestaurant(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurantList();
  }, []);

  return (
    <>
      <h1>Restaurant</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ShopList>
          {restaurant.map(item => (
            <li key={item._id}>
              <div>
                <ShopWrap to={`${location.pathname}/${item.name}`}>
                  <img
                    src={item.image}
                    alt="item.name"
                    width="240"
                    height="240"
                  />
                  <p>{item.name}</p>
                </ShopWrap>
              </div>
            </li>
          ))}
        </ShopList>
      )}
    </>
  );
};
