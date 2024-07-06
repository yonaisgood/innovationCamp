import styled from 'styled-components';

const TodoCardBox = styled.div`
  border: 4px solid teal;
  width: calc(100 - 33.33%);
  max-width: 270px;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
  flex-grow: 1;

  & > Button:first-of-type {
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;

export { TodoCardBox, ButtonBox };
