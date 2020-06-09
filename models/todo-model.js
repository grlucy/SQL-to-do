const orm = require("../config/orm");

const todo = {
  selectAll: function (cb) {
    orm.selectAll("todos", function (res) {
      cb(res);
    });
  },
};

module.exports = todo;
