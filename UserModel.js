const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    gmail:{
        type:String,
        required:true,
        unique: true,
        trim: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"please enter valid email"
    ]
    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }

});

const Users = mongoose.model("users", userSchema);
module.exports = Users;