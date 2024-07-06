import React from 'react';
import ToDoCard from '../toDoCard/ToDoCard';
import * as Styled from './StyledLayout';

export default function Layout() {
  return (
    <Styled.LayOutBox>
      <h3>Working.. 🔥</h3>
      <Styled.ProcessBox>
        <ToDoCard />
      </Styled.ProcessBox>
      <div>
        <h3>Done..! 🎉</h3>
        <ToDoCard />
      </div>
    </Styled.LayOutBox>
  );
}
