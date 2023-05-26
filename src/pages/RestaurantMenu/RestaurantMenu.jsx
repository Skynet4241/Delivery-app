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
  QuantityOfOrderedItems,
  QuantityOfOrderedItemsSpan,
  RestaurantMenuTitle,
} from './RestaurantMenu.styled';
import { addToOrder } from 'components/utils/addToOrder';
import { removeItemFromOrder } from 'components/utils/removeItemFromOrder';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'utils/Container';

export const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [totalItems, setTotalItems] = useState(0); // Добавленное состояние для счетчика
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
      const parsedOrder = JSON.parse(savedOrder);
      setOrder(parsedOrder);
      updateTotalItems(parsedOrder);
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
    updateTotalItems(order);
  };

  const getQuantity = itemId => {
    const item = order.find(orderItem => orderItem._id === itemId);
    return item ? item.quantity : 0;
  };

  const updateTotalItems = updatedOrder => {
    const totalItems = updatedOrder.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalItems(totalItems);
  };

  const getCurrentShopFromOrder = () => {
    if (order.length > 0) {
      const firstOrderItem = order[0];
      return firstOrderItem.restaurant;
    }
    return '';
  };
  const currentShopFromOrder = getCurrentShopFromOrder();

  return (
    <>
      <Container>
        <RestaurantMenuTitle>Restaurant Menu</RestaurantMenuTitle>{' '}
        {totalItems > 0 && (
          <div>
            <QuantityOfOrderedItems>
              Quantity of ordered items in {currentShopFromOrder}:{' '}
              <QuantityOfOrderedItemsSpan>
                {totalItems}
              </QuantityOfOrderedItemsSpan>
            </QuantityOfOrderedItems>
            <span>You can only order at one shop</span>
          </div>
        )}
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
      </Container>
    </>
  );
};
