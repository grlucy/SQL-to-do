const todo = require("../models/todo-model");

exports.selectAll = (req, res) => {
  todo.selectAll((data) => {
    return res.json({
      todos: data,
    });
  });
};
