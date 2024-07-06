import ToDoCard from '../../toDoCard/ToDoCard';
import * as Styled from './StyledLayout';
import { useSelector } from 'react-redux';

export default function Layout() {
  const toDos = useSelector((state) => state.toDos);

  return (
    <Styled.LayOutBox>
      <h3>Working.. 🔥</h3>
      <Styled.ProcessBox>
        {toDos
          .filter((e) => !e.isDone)
          .map((toDo) => (
            <ToDoCard key={toDo.id} toDo={toDo} />
          ))}
      </Styled.ProcessBox>
      <div>
        <h3>Done..! 🎉</h3>
        {toDos
          .filter((e) => e.isDone)
          .map((toDo) => (
            <ToDoCard key={toDo.id} toDo={toDo} />
          ))}
      </div>
    </Styled.LayOutBox>
  );
}
