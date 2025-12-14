import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }

    console.log('Submitting Controlled Form:', formData);
    setSuccess(true);
  };

  // DESTRUCTURE HERE
  const { username, email, password } = formData;

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
            value={username} 
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email} 
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password} 
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;