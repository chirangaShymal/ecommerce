const mongoose  = require('mongoose');

const cartSchema = new mongoose.Schema({
    inventID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"invents",
        required:true
    }
},{timestamps:true})

const Cart = mongoose.model("carts",cartSchema);

module.exports = Cart;