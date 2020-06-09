const router = require("express").Router();

const { selectAll } = require("../../controllers/todo-controller");

router.get("/list", selectAll);

// router.delete("/:id", (req, res) => {
//   const id = req.params.id.trim();
// });

module.exports = router;
