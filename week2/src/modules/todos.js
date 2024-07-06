import { v4 as uuidv4 } from 'uuid';

const initialState = [];

//액션
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const addNewToDo = (toDo) => {
  const id = uuidv4();

  return {
    type: ADD_TODO,
    payload: { ...toDo, id },
  };
};

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleToDo = (id) => ({
  type: TOGGLE_TODO,
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
    case TOGGLE_TODO:
      return state.map((toDo) =>
        toDo.id === action.payload ? { ...toDo, isDone: !toDo.isDone } : toDo,
      );

    default:
      return state;
  }
};
