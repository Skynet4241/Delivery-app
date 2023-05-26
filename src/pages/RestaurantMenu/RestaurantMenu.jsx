import { getRestaurantMenu } from 'components/API/getRestaurantMenu';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  ButtonAddToOrder,
  ButtonAddToOrderText,
  ButtonIcon,
  ButtonText,
  ButtonWrap,
  ItemTitle,
  ItemTitleBlock,
  MenuBlock,
  MenuItemWrap,
  MenuList,
  ProductTitle,
  RestaurantMenuTitle,
} from './RestaurantMenu.styled';
import { addToOrder } from 'components/utils/addToOrder';
import { removeItemFromOrder } from 'components/utils/removeItemFromOrder';
import { Loader } from 'components/Loader/Loader';

export const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const { shop } = useParams();

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        const result = await getRestaurantMenu(shop);
        setRestaurant(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRestaurantMenu();
  }, [shop]);

  useEffect(() => {
    const savedOrder = localStorage.getItem('Order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const handleAddToOrder = item => {
    addToOrder(item, setOrder, order, item.restaurant);
  };

  const handleRemoveItemFromOrder = item => {
    removeItemFromOrder(item, setOrder, order);
  };

  const handleSaveOrder = () => {
    localStorage.setItem('Order', JSON.stringify(order));
  };

  const getQuantity = itemId => {
    const item = order.find(orderItem => orderItem._id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <>
      <RestaurantMenuTitle>Restaurant Menu</RestaurantMenuTitle>{' '}
      <MenuBlock>
        {isLoading ? (
          <Loader />
        ) : (
          <MenuList>
            {restaurant.map(item => (
              <li key={item._id}>
                <MenuItemWrap>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="250px"
                    height="200px"
                  />
                  <ItemTitleBlock>
                    <ProductTitle>{item.name}</ProductTitle>
                    <ItemTitle>{item.price}</ItemTitle>
                  </ItemTitleBlock>

                  <ButtonWrap>
                    <Button
                      type="button"
                      onClick={() => handleRemoveItemFromOrder(item._id)}
                    >
                      <ButtonIcon>-</ButtonIcon>
                    </Button>
                    <ButtonText>{getQuantity(item._id)}</ButtonText>
                    <Button
                      type="button"
                      onClick={() => handleAddToOrder(item)}
                    >
                      <ButtonIcon>+</ButtonIcon>
                    </Button>
                  </ButtonWrap>
                </MenuItemWrap>
              </li>
            ))}
          </MenuList>
        )}
        {isLoading ? null : (
          <ButtonAddToOrder type="button" onClick={handleSaveOrder}>
            <ButtonAddToOrderText>ADD TO ORDER</ButtonAddToOrderText>
          </ButtonAddToOrder>
        )}
      </MenuBlock>
    </>
  );
};
