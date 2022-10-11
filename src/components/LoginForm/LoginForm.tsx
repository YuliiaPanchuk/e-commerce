import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../api/account';
import './LoginForm.css';

export function LoginForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn(name, password).then((data) => {
      if (data.success) {
        navigate('/store');
        alert('Welcome!');
      } else {
        alert(data.text);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username </label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />

        <label htmlFor="">Password </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
    
        <button>Log in</button>
      </form>
    </>
  );
}

/*
  TO DO:
  3. save user log in data so it can be refreshed
  2. add css to the input
  4. display user icon and text on the top right corner
  5. if logged in render the page and logout button.
*/
