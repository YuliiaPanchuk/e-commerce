import React, { useState } from 'react';
import { RegisterInputForm } from '../RegisterForm/RegisterInputForm';

export function CreditCart() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'cardNumber',
      type: 'text',
      placeholder: 'Card number',
      errorMessage:
        "Card number should be 16 characters and shouldn't include any special character!",
      label: 'Card number',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'nameCard',
      type: 'text',
      placeholder: 'Name on card',
      errorMessage: '',
      label: 'Name on card',
      required: true,
    },
    {
      id: 3,
      name: 'expirationDate',
      type: 'date',
      placeholder: 'Expiration date',
      errorMessage: '',
      label: 'Expiration date',
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: 'securityCode',
      type: 'password',
      placeholder: 'Security code',
      errorMessage: '',
      label: 'Security code',
      // pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div>
        <form className="registerForm">
          <h1 className="registerFormText">Payment method</h1>
          {inputs.map((input) => (
            <RegisterInputForm
              key={input.id}
              {...input}
              // @ts-expect-error
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </form>
      </div>
    </section>
  );
}
