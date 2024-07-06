import { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { FormBox } from './StyledForm';
import { useDispatch } from 'react-redux';
import { addNewToDo } from '../../../modules/todos';

export default function Form() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const dispatch = useDispatch();

  const onSubmitNewToDo = (e) => {
    e.preventDefault();
    if (title === '' || contents === '') return;

    dispatch(
      addNewToDo({
        title,
        contents,
        isDone: false,
      }),
    );

    setTitle('');
    setContents('');
  };

  return (
    <FormBox onSubmit={onSubmitNewToDo}>
      <div>
        <Input
          id="Title"
          label="Title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Content"
          type="text"
          name="content"
          id="Content"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </div>
      <Button>Add</Button>
    </FormBox>
  );
}
