export const CustomerFormSubmit = (
  customerData,
  order,
  getTotalAmount,
  createOrder,
  clearCart
) => {
  const orderData = {
    ...customerData,
    order: order.map(item => ({
      name: item.name,
      quantity: item.quantity,
    })),
    totalAmount: getTotalAmount(),
  };
  createOrder(orderData);
  clearCart();
};
