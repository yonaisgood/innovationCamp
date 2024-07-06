import React from 'react';
import Button from '../common/button/Button';
// import {deleteTodo} from "../"
import * as Styled from './ToDoCardStyeld';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../../modules/todos';

export default function ToDoCard(props) {
  const { toDo } = props;
  const dispatch = useDispatch();

  if (!toDo) {
    return null;
  }

  const onDeleteToDo = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <Styled.TodoCardBox key={toDo.id}>
      <Button width="100px">Detail</Button>
      <h3>{toDo.title}</h3>
      <p>{toDo.contents}</p>
      <Styled.ButtonBox>
        <Button
          borderColor="red"
          backgroundColor="white"
          color="black"
          onClick={() => onDeleteToDo(toDo.id)}
        >
          Delete
        </Button>
        <Button borderColor="green" backgroundColor="white" color="black">
          Done
        </Button>
      </Styled.ButtonBox>
    </Styled.TodoCardBox>
  );
}
