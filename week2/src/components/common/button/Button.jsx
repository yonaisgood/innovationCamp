import React from 'react';
import { ButtonBox } from './StyledButton';

export default function Button({
  onClick,
  children,
  bgColor,
  color,
  borderColor,
  width,
}) {
  return (
    <ButtonBox
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      width={width}
    >
      {children}
    </ButtonBox>
  );
}
