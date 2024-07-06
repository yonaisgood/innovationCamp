import React from 'react';
import Button from '../common/button/Button';

import * as Styled from './ToDoCardStyeld';

export default function ToDoCard() {
  return (
    <Styled.TodoCardBox>
      <Button width="100px">Detail</Button>
      <h3>제목</h3>
      <p>내용</p>
      <Styled.ButtonBox>
        <Button borderColor="red" bgColor="white" color="black">
          Delete
        </Button>
        <Button borderColor="green" bgColor="white" color="black">
          Done
        </Button>
      </Styled.ButtonBox>
    </Styled.TodoCardBox>
  );
}
