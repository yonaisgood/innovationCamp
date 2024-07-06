import { v4 as uuidv4 } from 'uuid';

const initialState = [];

//액션
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';

export const addNewToDo = (todo) => {
  const id = uuidv4();

  return {
    type: ADD_TODO,
    payload: { ...todo, id },
  };
};

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

//리듀서
export const toDos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO: {
      const newState = [];
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.payload) {
          newState.push(state[i]);
        }
      }
      return newState;
    }
    default:
      return state;
  }
};
