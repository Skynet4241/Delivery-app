import { Form, FormButton } from './CustomerForm.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
    setCustomerData({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Name:"
          id="fullWidth1"
          type="text"
          name="name"
          value={customerData.name}
          onChange={handleInputChange}
          required
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Email"
          id="fullWidth2"
          type="email"
          name="email"
          value={customerData.email}
          onChange={handleInputChange}
          required
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Phone:"
          id="fullWidth3"
          type="text"
          name="phone"
          value={customerData.phone}
          onChange={handleInputChange}
          required
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Address:"
          id="fullWidth4"
          type="text"
          name="address"
          value={customerData.address}
          onChange={handleInputChange}
          required
        />
      </Box>
      <FormButton type="submit">Place Order</FormButton>
    </Form>
  );
};
