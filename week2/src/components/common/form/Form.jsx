// import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { FormBox } from './StyledForm';

export default function Form() {
  return (
    <FormBox>
      <div>
        <Input label="Title" type="text" name="title" id="Title" />
        <Input label="Content" type="text" name="content" id="Content" />
      </div>
      <Button>Add</Button>
    </FormBox>
  );
}
