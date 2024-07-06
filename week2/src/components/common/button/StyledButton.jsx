import styled from 'styled-components';

const ButtonBox = styled.button`
  border: 1px solid ${(props) => props.borderColor || 'transparent'};
  background-color: ${(props) => props.bgColor || 'teal'};
  color: ${(props) => props.color || 'rgb(255, 255, 255)'};
  width: ${(props) => props.width || '140px'};
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ButtonBox };
