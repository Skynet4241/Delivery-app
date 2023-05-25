export const decreaseItemFromOrder = (
  order,
  quantity,
  item,
  removeItemFromOrder,
  setOrder,
  setQuantity
) => {
  const updatedOrder = [...order];
  const updatedQuantity = { ...quantity };

  if (updatedQuantity[item._id] === 1) {
    removeItemFromOrder(item._id, setOrder, order);
    delete updatedQuantity[item._id];
  } else if (updatedQuantity[item._id] > 1) {
    updatedOrder.forEach(orderItem => {
      if (orderItem._id === item._id) {
        orderItem.quantity -= 1;
        updatedQuantity[item._id] -= 1;
      }
    });
  }

  setQuantity(updatedQuantity);
};
