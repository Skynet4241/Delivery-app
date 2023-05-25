import { useEffect, useState } from 'react';
import { addToOrder } from 'components/utils/addToOrder';
import { removeItemFromOrder } from 'components/utils/removeItemFromOrder';
import {
  Button,
  ButtonCounter,
  ButtonIcon,
  ButtonWrap,
  CartItemWrap,
  ItemTitle,
  ItemTitleBlock,
  OrderList,
  ProductTitle,
} from './ShoppingCart.styled';
import { decreaseItemFromOrder } from 'components/utils/decreaseItemFromOrder';
import { CustomerForm } from 'components/utils/CustomerForm';
import { createOrder } from 'components/API/createOrder ';
import { CustomerFormSubmit } from 'components/utils/CustomerFormSubmit';

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
    decreaseItemFromOrder(
      order,
      quantity,
      item,
      removeItemFromOrder,
      setOrder,
      setQuantity
    );
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

  const getTotalQuantity = () => {
    return order.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return order.reduce(
      (total, item) => total + item.quantity * parseFloat(item.price),
      0
    );
  };

  const formatCurrency = value => {
    return `${value} uah`;
  };

  const handleCustomerFormSubmit = customerData => {
    CustomerFormSubmit(
      customerData,
      order,
      getTotalAmount,
      createOrder,
      clearCart
    );
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
              <CartItemWrap>
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
                  <ButtonCounter onClick={() => handleDecrease(item)}>
                    <ButtonIcon>-</ButtonIcon>
                  </ButtonCounter>
                  <p>{getQuantity(item._id)}</p>
                  <ButtonCounter onClick={() => handleIncrease(item)}>
                    <ButtonIcon>+</ButtonIcon>
                  </ButtonCounter>
                </ButtonWrap>

                <button onClick={() => handleDelete(item)}>Delete</button>
              </CartItemWrap>
            </li>
          ))}
        </OrderList>
      )}
      {order.length === 0 ? null : (
        <table>
          <thead>
            <tr>
              <th>Total Items</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{getTotalQuantity()}</td>
              <td>{formatCurrency(getTotalAmount())}</td>
            </tr>
          </tbody>
        </table>
      )}
      {order.length === 0 ? null : (
        <CustomerForm onSubmit={handleCustomerFormSubmit} />
      )}

      <Button type="button" onClick={handleSaveChanges}>
        Save Changes
      </Button>

      {order.length === 0 ? null : (
        <Button type="button" onClick={clearCart}>
          Clear
        </Button>
      )}
    </>
  );
};
