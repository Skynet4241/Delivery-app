import { getRestaurantMenu } from 'components/API/getRestaurantMenu';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuItemWrap, MenuList } from './RestaurantMenu.styled';
import { addToOrder } from 'components/utils/AddToOrder';
import { removeItemFromOrder } from 'components/utils/RemoveItemFromOrder';

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
      <h2>Restaurant Menu</h2>
      {isLoading ? (
        <p>Loading...</p>
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
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>Quantity: {getQuantity(item._id)}</p>
                <div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItemFromOrder(item._id)}
                  >
                    -
                  </button>
                  <button type="button" onClick={() => handleAddToOrder(item)}>
                    +
                  </button>
                </div>
              </MenuItemWrap>
            </li>
          ))}
        </MenuList>
      )}
      <button type="button" onClick={handleSaveOrder}>
        Save Order
      </button>
    </>
  );
};
