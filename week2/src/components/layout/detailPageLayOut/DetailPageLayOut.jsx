import Button from '../../common/button/Button';
import * as Styled from './StyledDetailPageLayOut';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DetailPageLayOut() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toDo = useSelector((state) => state.toDos.find((e) => e.id === id));

  if (!toDo) return <p>Can not find this page</p>;

  return (
    <Styled.DetailPageBox>
      <Styled.IdBox>ID : {toDo.id}</Styled.IdBox>
      <div>
        <h3>{toDo.title}</h3>
        <p>{toDo.contents}</p>
      </div>

      <Button
        borderColor="gray"
        backgroundColor="white"
        color="black"
        onClick={() => navigate(`/`)}
      >
        Back
      </Button>
    </Styled.DetailPageBox>
  );
}
