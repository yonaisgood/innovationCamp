import * as Styled from '@/components/common/button/StyledButton';

export default function Button({
  size,
  color,
  border,
  icon,
  children,
  ...props
}) {
  return (
    <Styled.ButtonBox
      $size={size}
      $color={color}
      icon={icon}
      border={border}
      {...props}
    >
      {children}
      {icon && <img src={icon} alt="Icon" />}
    </Styled.ButtonBox>
  );
}
