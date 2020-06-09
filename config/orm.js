const connection = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    const query = `SELECT * FROM ??`;
    connection.query(query, [table], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
