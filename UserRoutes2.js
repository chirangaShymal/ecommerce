const express = require("express");
const router = express.Router();
//insert model
const Invent = require("../Model/UserModel2");
//inset usercontroller2
const UserController2 = require("../Controllers/UserControllers2");

router.get("/",UserController2.getAllInvent);
router.post("/",UserController2.addInvent);
router.get("/:id",UserController2.getById);
router.put("/:id",UserController2.UpdateInvent);
router.delete("/:id",UserController2.deleteInvent);
//export
module.exports = router;