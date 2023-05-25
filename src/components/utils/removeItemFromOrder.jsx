export const removeItemFromOrder = (itemId, setOrder, order) => {
  const updatedOrder = order.filter(orderItem => orderItem._id !== itemId);
  setOrder(updatedOrder);
};
