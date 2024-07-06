import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../common/button/Button';
import { deleteToDo } from '../../modules/todos';
import * as Styled from './ToDoCardStyeld';

export default function ToDoCard(props) {
  const { toDo } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!toDo) {
    return null;
  }

  const onDeleteToDo = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <Styled.TodoCardBox key={toDo.id}>
      <Button width="100px" onClick={() => navigate(`/${toDo.id}`)}>
        Detail
      </Button>
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
