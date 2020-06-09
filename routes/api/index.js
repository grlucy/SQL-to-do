const router = require("express").Router();

const {
  selectAll,
  deleteOne,
  updateStatus,
} = require("../../controllers/todo-controller");

router.get("/list", selectAll);

router.delete("/:id", deleteOne);

router.put("/status/:status/id/:id", updateStatus);

module.exports = router;
