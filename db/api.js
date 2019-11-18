// Connect to the database and import models
const { todo } = require('./dbconnect');

// Todo functions

// get all the todos. note that a promise is returned
function getTodos() {
  return todo.findAll();
}

// add todo and then return all todos. Note that a promise is returned
function addTodo(todoname) {
  return todo.create({ taskname: todoname }).then(() => {
    return todo.findAll();
  });
}

// removes a todo by id and then returns all todos
function removeTodo(todoId) {
  return todo.destroy(todoId).then(() => todo.findAll());
}

// Export the functions so that they can be used throughout your backend
module.exports = {
  todos: {
    getTodos,
    addTodo,
    removeTodo
  }
};
