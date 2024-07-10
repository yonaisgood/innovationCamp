import styled, { css } from 'styled-components';

const ButtonBox = styled.button`
  ${({ $size }) => sizeStyles[$size]};
  ${({ $color }) => (colorStyles[$color] ? colorStyles[$color] : primaryStyle)};
  ${({ $border }) => $border && borderStyles}
  ${({ $borderRadius }) =>
    $borderRadius === 'circleBtn' ? circleStyle : 'border-radius: 8px;'};

  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  img {
    width: 16px;
    aspect-ratio: 1/1;
  }
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

const circleStyle = css`
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

const sizeStyles = {
  large: largeStyle,
  medium: mediumStyle,
  small: smallStyle,
  circle: circleStyle,
};

//primary, negative 버튼 스타일
const negativeStyle = css`
  color: rgb(214, 48, 49);
  background-color: rgb(250, 177, 160);
  border-color: rgb(250, 177, 160);
  &:active {
    background-color: #e17055;
  }
`;

const primaryStyle = css`
  background-color: rgb(85, 239, 196);
  border-color: rgb(85, 239, 196);
  &:active {
    background-color: #00b894;
  }
`;

const grayStyle = css`
  background-color: #e2e2e2;
  border: 1px solid rgb(221, 221, 221);
  &:active {
    opacity: 70%;
  }
`;
const colorStyles = {
  negative: negativeStyle,
  primary: primaryStyle,
  gray: grayStyle,
};

//border 버튼 스타일
const borderStyles = css`
  background-color: white;
  border-width: 3px;
  &:active {
    background-color: #eeeeee;
  }
`;

export { ButtonBox };
