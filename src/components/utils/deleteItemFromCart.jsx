export const deleteItemFromCart = (
  item,
  order,
  setQuantity,
  setCartUpdated,
  quantity
) => {
  const updatedOrder = order.filter(orderItem => orderItem !== item);
  const updatedQuantity = { ...quantity };
  delete updatedQuantity[item];
  localStorage.setItem('Order', JSON.stringify(updatedOrder));
  setQuantity(updatedQuantity);
  setCartUpdated(true);
};
