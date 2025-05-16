const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const userInvent = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },


});

const Invent = mongoose.model("invents", userInvent);
module.exports = Invent;