import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/account';
import { RegisterInputForm } from '../../components/RegisterForm/RegisterInputForm';
import { Login } from '.';
import './Register.css';

export function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUp(values.username, values.password, values.email).then((data) => {
      if (data.success) {
        navigate('/login');
      } else {
        alert(data.text);
      }
    });
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="registerApp">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h1 className="registerFormText">Register</h1>
        {inputs.map((input) => (
          <RegisterInputForm
            key={input.id}
            {...input}
            // @ts-expect-error
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="registerFormInputSubmit">Submit</button>
        <button className="loginFormInputSubmit" onClick={() => navigate('/user')}>
          Log in
        </button>
      </form>
    </div>
  );
}
