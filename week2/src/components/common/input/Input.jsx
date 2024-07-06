// import React from 'react';
import { InputContainer } from './StyledInput';

export default function Input({ label, type, name, id, onChange, value }) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
    </InputContainer>
  );
}
