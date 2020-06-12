const router = require("express").Router();

const {
  selectAll,
  deleteOne,
  updateStatus,
  deleteAll,
  createOne,
} = require("../../controllers/todo-controller");

router.get("/list", selectAll);

router.delete("/clear/id/:id", deleteOne);

router.put("/status/:status/id/:id", updateStatus);

router.delete("/clearAll", deleteAll);

router.post("/create/:value", createOne);

module.exports = router;
