import React from 'react';
import Button from '../../common/button/Button';
import * as Styled from './StyledDetailPageLayOut';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function DetailPageLayOut() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toDo = useSelector((state) => state.toDos.find((e) => e.id === +id));

  if (!toDo) return <p>Can not find this page</p>;

  return (
    <Styled.DetailPageBox>
      <Styled.DetailPageInfo>
        <p>{toDo.id}</p>
        <div>
          <h3>{toDo.title}</h3>
          <p>{toDo.contents}</p>
        </div>
      </Styled.DetailPageInfo>
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
