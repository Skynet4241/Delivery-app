import { useEffect, useState } from 'react';

export const ShoppingCart = () => {
  const savedOrder = localStorage.getItem('Order');
  const order = savedOrder ? JSON.parse(savedOrder) : [];

  const [cartUpdated, setCartUpdated] = useState(false);
  const [quantity, setQuantity] = useState({});

  const clearCart = () => {
    localStorage.removeItem('Order');
    setCartUpdated(true);
  };

  const handleDelete = item => {
    const updatedOrder = order.filter(orderItem => orderItem !== item);
    const updatedQuantity = { ...quantity };
    delete updatedQuantity[item];
    localStorage.setItem('Order', JSON.stringify(updatedOrder));
    setQuantity(updatedQuantity);
    setCartUpdated(true);
  };

  useEffect(() => {}, [cartUpdated]);
  const getQuantity = itemId => {
    const item = order.find(orderItem => orderItem._id === itemId);
    return item ? item.quantity : 0;
  };
  return (
    <>
      <h2>Shopping Cart</h2>
      {order.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
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
                <button onClick={() => handleDelete(item)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => {
          clearCart();
        }}
      >
        Clear
      </button>
    </>
  );
};
