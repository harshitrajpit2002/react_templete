import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('registered')) || [];
    console.log(storedUsers)
    // Find the user with the entered username
    const user = storedUsers.find(u => u.username === loginData.username);

    // Check if the user exists and the password matches
    if (user && user.password === loginData.password) {
      // Successful login, navigate to the next page
      alert('success')
      localStorage.setItem('login',true);
      navigate('/home');
    } else {
      // Invalid credentials, display an error message
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1 className='d-flex justify-content-center py-5'>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={loginData.username} onChange={handleInputChange} required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={loginData.password} onChange={handleInputChange} required />
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
