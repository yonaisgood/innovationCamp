import Input from '@/components/common/input/Input';
import Button from '@/components/common/button/Button';
import * as Styled from '@/components/widgetSet/CommonLayout';
import { useState } from 'react';

export default function InputSet() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePrice = (event) => {
    const formValue = +event.target.value.replace(/[^\d]/g, '');
    setPrice(formValue);
  };

  const onHandleSubmit = () => {
    if (name === '' && price === 0) {
      alert('이름과 가격을 입력해 주세요');
    } else {
      alert(`이름은 : ${name}, 가격은 : ${price}`);
    }
  };
  return (
    <Styled.SectionLayout>
      <h2>Input</h2>
      <form onSubmit={onHandleSubmit} className="FormBox">
        <Input
          id="name"
          label="name : "
          name="name"
          value={name}
          onChange={handleName}
        />
        <Input
          id="price"
          label="price : "
          name="price"
          value={price.toLocaleString()}
          onChange={handlePrice}
        />
        <Button size="small">Save</Button>
      </form>
    </Styled.SectionLayout>
  );
}
