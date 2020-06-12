const connection = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    const query = `SELECT * FROM ??`;
    connection.query(query, [table], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  deleteOne: function (table, column, value, cb) {
    const query = `DELETE FROM ?? WHERE ?? = ?`;
    connection.query(query, [table, column, value], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function (table, column1, value1, column2, value2, cb) {
    const query = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
    connection.query(
      query,
      [table, column1, value1, column2, value2],
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  deleteAll: function (table, cb) {
    const query = `TRUNCATE TABLE ??`;
    connection.query(query, [table], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  createOne: function (table, column, value, cb) {
    const query = `INSERT INTO ?? (??) VALUES (?)`;
    connection.query(query, [table, column, value], function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
