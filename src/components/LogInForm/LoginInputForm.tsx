import React, { useState } from 'react';
import './LoginInputForm.css';

export function LoginInputForm(props: any) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label className='formInputLabel'>{label}</label>
      <input
        className='formInputInput'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className='formInputError'>{errorMessage}</span>
    </div>
  );
}
