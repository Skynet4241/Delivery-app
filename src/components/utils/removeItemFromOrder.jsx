export const removeItemFromOrder = (itemId, setOrder, order) => {
  const updatedOrder = order.map(orderItem => {
    if (orderItem._id === itemId) {
      return {
        ...orderItem,
        quantity: orderItem.quantity - 1,
      };
    }
    return orderItem;
  });
  setOrder(updatedOrder);
};
