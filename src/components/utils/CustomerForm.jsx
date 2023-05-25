import { Form, FormButton } from './CustomerForm.styled';

const { useState } = require('react');

export const CustomerForm = ({ onSubmit }) => {
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCustomerData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(customerData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={customerData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={customerData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={customerData.phone}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={customerData.address}
          onChange={handleInputChange}
          required
        />
      </label>
      <FormButton type="submit">Place Order</FormButton>
    </Form>
  );
};
