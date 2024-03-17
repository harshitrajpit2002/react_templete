import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate=useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username already exists in local storage
    const storedUsers = JSON.parse(localStorage.getItem('registered')) || [];
    const isUsernameExists = storedUsers.some((user) => user.username === formData.username);

    if (isUsernameExists) {
      setError('Username is already taken. Please choose a different one.');
    } else {
      // If username is unique, store registration data in local storage
      const newUser = { ...formData };
      storedUsers.push(newUser);
      localStorage.setItem('registered', JSON.stringify(storedUsers));

      // You can redirect to another page or perform any other actions after successful registration
      alert('Registration successful!');
      navigate('/login')
    }
  };

  return (
    <div>
      <h1 className='d-flex justify-content-center'>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
