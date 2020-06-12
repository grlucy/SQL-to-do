const router = require("express").Router();

const {
  selectAll,
  deleteOne,
  updateStatus,
  deleteAll,
} = require("../../controllers/todo-controller");

router.get("/list", selectAll);

router.delete("/clear/id/:id", deleteOne);

router.put("/status/:status/id/:id", updateStatus);

router.delete("/clearAll", deleteAll);

module.exports = router;
