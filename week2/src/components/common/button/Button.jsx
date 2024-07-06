import React from 'react';
import { ButtonBox } from './StyledButton';

export default function Button({
  onClick,
  children,
  backgroundColor,
  color,
  borderColor,
  width,
}) {
  return (
    <ButtonBox
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
      width={width}
    >
      {children}
    </ButtonBox>
  );
}
