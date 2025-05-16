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
        type:Number,
        required:true,
    },


});

const Invent = mongoose.model("invent", userInvent);
module.exports = Invent;