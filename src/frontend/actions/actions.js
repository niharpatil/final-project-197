import axios from 'axios';
import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAILURE
} from './types';

export const addTodo = newTodo => {
  return dispatch => {
    axios
      .post('/api/todo', { todo: newTodo })
      .then(({ data }) => {
        dispatch({ type: ADD_TODO_SUCCESS, todos: data });
      })
      .catch(error => {
        dispatch({ type: ADD_TODO_FAILURE, error });
      });
  };
};

export const getTodos = () => {
  return dispatch => {
    axios
      .get('/api/todos')
      .then(({ data }) => {
        dispatch({ type: GET_TODOS_SUCCESS, todos: data });
      })
      .catch(error => {
        dispatch({ type: GET_TODOS_FAILURE, error });
      });
  };
};

export const removeTodo = todoId => {
  return dispatch => {
    axios
      .post('/api/remove_todo', { todoId })
      .then(({ data }) => {
        dispatch({ type: REMOVE_TODO_SUCCESS, todos: data });
      })
      .catch(error => {
        dispatch({ type: REMOVE_TODO_FAILURE, error });
      });
  };
};
