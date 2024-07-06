import styled from 'styled-components';

const TodoCardBox = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;

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
