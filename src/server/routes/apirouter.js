const apiRouter = require('express').Router();

module.exports = db => {
  // route to get todos from the database
  apiRouter.get('/todos', (req, res) => {
    db.todos.getTodos().then(todos => res.json(todos));
  });

  // route to add new todo to the database
  apiRouter.post('/todo', (req, res) => {
    const newTodo = req.body.todo;
    db.todos.addTodo(newTodo).then(todos => res.json(todos));
  });

  // route to remove a todo from the database
  apiRouter.post('/remove_todo', (req, res) => {
    const todoId = req.body.todoId;
    db.todos
      .removeTodo({ where: { id: todoId } })
      .then(todos => res.json(todos));
  });
  return apiRouter;
};
