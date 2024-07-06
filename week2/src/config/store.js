import { combineReducers, createStore } from 'redux';
import { toDos } from '../modules/todos';

const rootReducer = combineReducers({
  toDos,
});

const store = createStore(rootReducer);

export default store;
