import { useEffect, useState } from 'react';
import { addToOrder } from 'components/utils/addToOrder';
import { removeItemFromOrder } from 'components/utils/removeItemFromOrder';
import { OrderList } from './ShoppingCart.styled';

export const ShoppingCart = () => {
  const savedOrder = localStorage.getItem('Order');
  const initialOrder = savedOrder ? JSON.parse(savedOrder) : [];

  const [quantity, setQuantity] = useState({});
  const [order, setOrder] = useState(initialOrder);

  const clearCart = () => {
    localStorage.removeItem('Order');
    setOrder([]);
  };

  const handleDelete = item => {
    removeItemFromOrder(item._id, setOrder, order);
  };

  const handleDecrease = item => {
    const updatedOrder = [...order];
    const updatedQuantity = { ...quantity };

    if (updatedQuantity[item._id] === 1) {
      removeItemFromOrder(item._id, setOrder, order);
      delete updatedQuantity[item._id];
    } else {
      updatedOrder.forEach(orderItem => {
        if (orderItem._id === item._id) {
          orderItem.quantity -= 1;
          updatedQuantity[item._id] -= 1;
        }
      });
    }

    setQuantity(updatedQuantity);
  };

  const handleIncrease = item => {
    addToOrder(item, setOrder, order);
  };

  const handleSaveChanges = () => {
    localStorage.setItem('Order', JSON.stringify(order));
  };

  useEffect(() => {
    const quantityMap = order.reduce((acc, item) => {
      acc[item._id] = item.quantity;
      return acc;
    }, {});
    setQuantity(quantityMap);
  }, [order]);

  const getQuantity = itemId => {
    return quantity[itemId] || 0;
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <OrderList>
          {order.map(item => (
            <li key={item._id}>
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  width="250px"
                  height="200px"
                />
                <p>{item.name}</p>
                <p>Quantity: {getQuantity(item._id)}</p>
                <button onClick={() => handleDecrease(item)}>-</button>
                <button onClick={() => handleIncrease(item)}>+</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </li>
          ))}
        </OrderList>
      )}
      <button type="button" onClick={handleSaveChanges}>
        Save Changes
      </button>
      <button type="button" onClick={clearCart}>
        Clear
      </button>
    </>
  );
};
