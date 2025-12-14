import { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // 1. Requirement: Use "setErrors" (plural)
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState(false);

  const { username, email, password } = formData; // Destructure for cleaner access

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrors(''); // Reset errors

    // 2. Requirement: Specific validation checks for each field
    if (!username) {
      setErrors('Username is required');
      return;
    }
    if (!email) {
      setErrors('Email is required');
      return;
    }
    if (!password) {
      setErrors('Password is required');
      return;
    }

    console.log('Submitting Controlled Form:', formData);
    setSuccess(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
      <h2>Controlled Component Form</h2>
      
      {/* Display errors */}
      {errors && <p style={{ color: 'red' }}>{errors}</p>}
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