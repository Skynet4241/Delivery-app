export const removeItemFromOrder = (itemId, setOrder, order) => {
  const updatedOrder = order
    .map(orderItem => {
      if (orderItem._id === itemId) {
        if (orderItem.quantity === 1) {
          return null;
        } else {
          return {
            ...orderItem,
            quantity: orderItem.quantity - 1,
          };
        }
      }
      return orderItem;
    })
    .filter(Boolean);
  setOrder(updatedOrder);
};
