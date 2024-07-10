import styled from 'styled-components';

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 10px;

  input {
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding: 0 12px;

    &:focus {
      outline: 1px solid black;
    }
  }
`;

export { Input };
