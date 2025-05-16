const express = require("express");
const router = express.Router();
//insert model
//inset usercontroller2
const UserController2 = require("../Controllers/InventoryController");

router.get("/",UserController2.getAllInvent);
router.post("/",UserController2.addInvent);
router.get("/:id",UserController2.getById);
router.put("/:id",UserController2.UpdateInvent);
router.delete("/:id",UserController2.deleteInvent);
//export
module.exports = router;