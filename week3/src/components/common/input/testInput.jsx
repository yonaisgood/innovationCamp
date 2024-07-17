import { useState, useEffect } from 'react';

function TestInput() {
  // const [price, setPrice] = useState(0);

  // const onChangeHandler = (event) => {
  //   const input = parseInt(event.target.value.split(',').join(''));
  //   if (isNaN(input)) return;

  //   setPrice(input);
  // };
  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={price.toLocaleString()}
  //       onChange={onChangeHandler}
  //     />
  //   </>
  // );
  const [price, setPrice] = useState('');

  const onChangeHandler = (event) => {
    const inputValue = event.target.value.split(',').join('');
    if (!isNaN(inputValue) && inputValue !== '') {
      setPrice(inputValue);
    } else if (inputValue === '') {
      setPrice('');
    }
  };

  const formatPrice = (value) => {
    if (value === '') return '';
    const intValue = parseInt(value);
    if (intValue % 3 === 0) {
      return intValue.toLocaleString();
    }
    return value;
  };

  useEffect(() => {
    setPrice((prevPrice) => formatPrice(prevPrice.split(',').join('')));
  }, [price]);

  return (
    <>
      <input type="text" value={price} onChange={onChangeHandler} />
    </>
  );
}
export default TestInput;
