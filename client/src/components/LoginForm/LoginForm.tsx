import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../../context/UserContext';
import './LoginForm.css';

export function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const user = useLoginContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    user.signIn(name, password, (success) => {
      if (success) {
        navigate('/store');
        alert('Welcome!');
      }
    });
  };

  return (
    <div className="loginApp">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="loginFormText">Log in</h1>
        <label className="loginFormLabel" htmlFor="">
          Username{' '}
        </label>
        <input
          className="loginFormInput"
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label className="loginFormLabel" htmlFor="">
          Password{' '}
        </label>
        <input
          className="loginFormInput"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="loginFormInputSubmit">Log in</button>
        <button className="registerFormInputSubmit" onClick={() => navigate('/user/register')}>
          Register
        </button>
      </form>
    </div>
  );
}
