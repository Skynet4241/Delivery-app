export const addToOrder = (item, setOrder, order) => {
  const existingItem = order.find(orderItem => orderItem._id === item._id);
  let updatedOrder = [];

  if (order.length > 0) {
    const firstRestaurant = order[0].restaurant;
    if (firstRestaurant !== item.restaurant) {
      return;
    }
  }

  if (existingItem) {
    updatedOrder = order.map(orderItem => {
      if (orderItem._id === item._id) {
        return { ...orderItem, quantity: orderItem.quantity + 1 };
      }
      return orderItem;
    });
  } else {
    updatedOrder = [...order, { ...item, quantity: 1 }];
  }

  setOrder(updatedOrder);
};
