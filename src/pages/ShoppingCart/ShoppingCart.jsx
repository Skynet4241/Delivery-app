import { useEffect, useState } from 'react';
import { addToOrder } from 'components/utils/addToOrder';
import { removeItemFromOrder } from 'components/utils/removeItemFromOrder';
import {
  ButtonCounter,
  ButtonDelete,
  ButtonIcon,
  ButtonWrap,
  CartItemWrap,
  FormTitle,
  ItemTitle,
  ItemTitleBlock,
  OrderList,
  OrderListWrap,
  ProductTitle,
  ShoppingCartTitle,
  ShoppingCartWrap,
  TotalAmount,
  TotalAmountSpan,
} from './ShoppingCart.styled';
import { decreaseItemFromOrder } from 'components/utils/decreaseItemFromOrder';
import { CustomerForm } from 'components/utils/CustomerForm';
import { createOrder } from 'components/API/createOrder ';
import { CustomerFormSubmit } from 'components/utils/CustomerFormSubmit';
import { deleteItemFromCart } from 'components/utils/deleteItemFromCart';

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
    deleteItemFromCart(item, setOrder, order);
    localStorage.setItem('Order', JSON.stringify(order));
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
  useEffect(() => {
    localStorage.setItem('Order', JSON.stringify(order));
  }, [order]);
  return (
    <>
      <ShoppingCartTitle>Shopping Cart</ShoppingCartTitle>
      <ShoppingCartWrap>
        {order.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <OrderListWrap>
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
                    <ButtonDelete onClick={() => handleDelete(item)}>
                      <img
                        src="https://svgsilh.com/svg/155299.svg"
                        alt="Delete"
                        width="30px"
                        height="30px"
                      />
                    </ButtonDelete>
                  </CartItemWrap>
                </li>
              ))}
            </OrderList>
          </OrderListWrap>
        )}

        {order.length === 0 ? null : (
          <div>
            <TotalAmount>
              Total Amount:{' '}
              <TotalAmountSpan>
                {formatCurrency(getTotalAmount())}
              </TotalAmountSpan>
            </TotalAmount>
            <FormTitle>Personal information</FormTitle>
            <CustomerForm onSubmit={handleCustomerFormSubmit} />
          </div>
        )}
      </ShoppingCartWrap>
    </>
  );
};
