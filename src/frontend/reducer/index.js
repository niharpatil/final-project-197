import {
  ADD_TODO_SUCCESS,
  GET_TODOS_SUCCESS,
  REMOVE_TODO_SUCCESS
} from '../actions/types';

export default (state = [], action) => {
  let stateCopy = state.slice();
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return action.todos;
    case ADD_TODO_SUCCESS:
      return action.todos;
    case REMOVE_TODO_SUCCESS:
      return action.todos;
  }
  return stateCopy;
};
