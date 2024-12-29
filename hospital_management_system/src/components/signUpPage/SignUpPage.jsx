import React, { useState } from 'react';
import './signUpPage.scss';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      console.log('Logged in with:', { mobileNumber, password });
      navigate('/login')
    };
  return (
    <div className="signupContainer">
      <div className="login-fields-container">
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
