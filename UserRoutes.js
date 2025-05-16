const express = require("express");
const router = express.Router();
//insert model
const User = require("../Model/UserModel");
//inset usercontroller
const UserController = require("../Controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.UpdateUser);
router.delete("/:id",UserController.deleteUser);
//export
module.exports = router;