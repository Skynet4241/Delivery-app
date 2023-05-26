export const deleteItemFromCart = (item, setOrder, order) => {
  const updatedOrder = order.filter(
    orderItem => orderItem._id !== item._id.toString()
  );
  setOrder(updatedOrder);
};
