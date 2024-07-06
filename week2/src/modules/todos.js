import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: 1,
    title: 'ww',
    content: 'ss',
    isDone: 'false',
  },
];

//액션
const ADD_TODO = 'todos/ADD_TODO';

export const addNewToDo = (todo) => {
  const id = uuidv4();

  return {
    type: ADD_TODO,
    payload: { ...todo, id },
  };
};

//리듀서
export const toDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
