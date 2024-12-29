import React, { useState } from 'react';
import './loginPage.scss';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with:', { mobileNumber, password });
    navigate('/home/bookAppointment')
  };
  const handleCreateAcc = (e) => {
    navigate('/signup')
  };

  return (
    <div className="loginContainer">
      <div className="login-fields-container">
        <form className="form" onSubmit={handleLogin}>
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
            Login
          </button>
          <h5 onClick={()=>handleCreateAcc()}>Don't have account? Create now</h5>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;