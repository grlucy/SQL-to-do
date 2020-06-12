const orm = require("../config/orm");

const todo = {
  selectAll: function (cb) {
    orm.selectAll("todos", function (res) {
      cb(res);
    });
  },
  deleteOne: function (id, cb) {
    orm.deleteOne("todos", "id", id, function (res) {
      cb(res);
    });
  },
  updateStatus: function (status, id, cb) {
    orm.updateOne("todos", "complete", status, "id", id, function (res) {
      cb(res);
    });
  },
  deleteAll: function (cb) {
    orm.deleteAll("todos", function (res) {
      cb(res);
    });
  },
  createOne: function (value, cb) {
    orm.createOne("todos", "todo_text", value, function (res) {
      cb(res);
    });
  },
};

module.exports = todo;
