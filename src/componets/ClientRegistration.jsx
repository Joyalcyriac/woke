import React from 'react';

const ClientRegistration = () => {
  const [clientData, setClientData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields relevant to clients
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for client registration
    console.log('Client Data:', clientData);
    // You can send this data to a backend or perform any actions here
  };

  return (
    <div>
      <h2>Client Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={clientData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={clientData.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={clientData.email}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields */}
        <button type="submit">Register as Client</button>
      </form>
    </div>
  );
};

export default ClientRegistration;
