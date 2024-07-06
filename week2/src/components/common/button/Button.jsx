import React from 'react';
import { ButtonBox } from './StyledButton';

export default function Button({ onClick, children }) {
  return <ButtonBox onClick={onClick}>{children}</ButtonBox>;
}
