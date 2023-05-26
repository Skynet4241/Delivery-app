import { getRestaurantList } from 'components/API/getRestaurantList';
import { useEffect, useState } from 'react';
import {
  ShopItemIfoText,
  ShopItemIfoWrap,
  ShopItemImageWrap,
  ShopItemWrap,
  ShopList,
  ShopPageWrap,
  ShopTitle,
  ShopWrap,
} from './Shop.styled';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

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
      <ShopTitle>Shops</ShopTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <ShopPageWrap>
          <ShopList>
            {restaurant.map(item => (
              <li key={item._id}>
                <ShopItemWrap>
                  <ShopWrap to={`${location.pathname}/${item.name}`}>
                    <ShopItemImageWrap>
                      <img
                        src={item.image}
                        alt="item.name"
                        width="240"
                        height="240"
                      />
                    </ShopItemImageWrap>
                    <ShopItemIfoWrap>
                      <ShopItemIfoText>{item.name}</ShopItemIfoText>
                    </ShopItemIfoWrap>
                  </ShopWrap>
                </ShopItemWrap>
              </li>
            ))}
          </ShopList>
        </ShopPageWrap>
      )}
    </>
  );
};
