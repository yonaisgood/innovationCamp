import styled, { css } from 'styled-components';

const ButtonBox = styled.button`
  ${({ $size }) => sizeStyles[$size]};
  ${({ $color }) => ($color === 'negative' ? negativeStyle : primaryStyle)};
  ${({ border }) => border && borderStyles}
  border-radius: 8px;
  font-weight: 600;
`;

//사이즈별 버튼 크기
const largeStyle = css`
  min-width: 200px;
  height: 50px;
`;

const mediumStyle = css`
  min-width: 120px;
  height: 45px;
`;

const smallStyle = css`
  min-width: 100px;
  height: 40px;
`;

const sizeStyles = {
  large: largeStyle,
  medium: mediumStyle,
  small: smallStyle,
};

//primary, negative 버튼 스타일
const negativeStyle = css`
  color: rgb(214, 48, 49);
  background-color: rgb(250, 177, 160);
  border-color: rgb(250, 177, 160);
`;

const primaryStyle = css`
  background-color: rgb(85, 239, 196);
  border-color: rgb(85, 239, 196);
`;

//border 버튼 스타일
const borderStyles = css`
  background-color: white;
  border-width: 3px;
`;
export { ButtonBox };