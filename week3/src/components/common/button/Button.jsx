import React from 'react';
import * as Styled from '@/components/common/button/StyledButton';

export default function Button({ size, color, border, children, ...props }) {
  return (
    <Styled.ButtonBox $size={size} $color={color} border={border} {...props}>
      {children}
    </Styled.ButtonBox>
  );
}
