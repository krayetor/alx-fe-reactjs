import { useState } from 'react';

const RegistrationForm = () => {
  // Manage form state manually
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Submission with Basic Validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Basic validation: Check for empty fields
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    // Simulate API call
    console.log('Submitting Controlled Form:', formData);
    setSuccess(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      <h2>Controlled Component Form</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Registration Successful!</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;