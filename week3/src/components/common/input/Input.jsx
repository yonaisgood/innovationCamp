import * as Styled from '@/components/common/input/StyledInput';

export default function Input({
  id,
  label,
  type = 'text',
  name,
  onChange,
  value,
}) {
  return (
    <Styled.Input>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </Styled.Input>
  );
}
