const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "This field is required"],
        trim : true
    },
    email : {
        type : String,
        required : [true,"This field is required"],
        trim : true,
        unique : true,
        lowercase : true
    },
    mobile : {
        type : Number,
        required : [true, "This field is required"],
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true})
const User = mongoose.model("User", userSchema)
module.exports = User;