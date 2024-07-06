// import React from 'react';
import { InputContainer } from './StyledInput';

export default function Input({ label, type, name, id }) {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} />
    </InputContainer>
  );
}
