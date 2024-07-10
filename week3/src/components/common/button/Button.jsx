import * as Styled from '@/components/common/button/StyledButton';

export default function Button({
  size,
  color,
  borderRadius,
  border,
  icon,
  children,
  onClick,
}) {
  return (
    <Styled.ButtonBox
      $size={size}
      $color={color}
      icon={icon}
      $border={border}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
      {icon && <img src={icon} alt="Icon" />}
    </Styled.ButtonBox>
  );
}
