const router = require("express").Router();
const connection = require("../../config/connection");

router.get("/list", (req, res) => {
  connection.query(`SELECT * FROM todos`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        todos: results,
      });
    }
  });
});

module.exports = router;
