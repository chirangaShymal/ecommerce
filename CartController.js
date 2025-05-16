const Cart = require("../Model/CartModel");
const Invent = require("../Model/inventoryModel");

const addToCart = async (req, res) => {
  try {
    const inventID = req.body;

    const newCart = new Cart(inventID);

    await newCart.save();
    res.json({ data: newCart });
  } catch (error) {
    console.log(error);
  }
};

const deleteCart = async (req, res, next) => {
  const id = req.params.id;
  try {
    const cart = await Cart.findByIdAndDelete(id);

    if (!cart || cart.length === 0) {
      return res.status(404).json({ message: "can not delete item " });
    }
    return res.status(200).json({message:"Item deleted."});
  } catch (err) {
    console.log(err);
  }
};

const getCartDetails = async (req, res) => {
  try {
    const cart = await Cart.find()
      .populate("inventID", "name price details")
      .exec();

    //const cartDetails = await Invent.find(cart.inventID);

    if (cart) {
      res.status(200).json({ data: cart });
    } else {
      res.status(400).json({ message: "No record found." });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { addToCart, getCartDetails, deleteCart };
