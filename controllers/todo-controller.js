const todo = require("../models/todo-model");

exports.selectAll = (req, res) => {
  todo.selectAll((data) => {
    return res.json({
      todos: data,
    });
  });
};

exports.deleteOne = (req, res) => {
  todo.deleteOne(req.params.id.trim(), (data) => {
    return res.json({
      data,
    });
  });
};

exports.updateStatus = (req, res) => {
  // if (req.params.status.trim() === "true"){
  //   let status = true;
  // } else {
  //   let status = false;
  // }
  todo.updateStatus(req.params.status.trim(), req.params.id.trim(), (data) => {
    return res.json({
      data,
    });
  });
};
