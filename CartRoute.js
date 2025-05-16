const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCartDetails,
  deleteCart,
} = require("../Controllers/CartController");

router.post("/", addToCart);
router.get("/", getCartDetails);
router.delete("/:id", deleteCart);
module.exports = router;
