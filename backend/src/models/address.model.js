const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },
    mobile : {
        type : Number,
        required : true,
        trim : true
    },
    location :{
        type : String,
        required : true,
    },
    pincode :{
        type : String,
        trim : true
    },
    city : {
        type : String,
        required : true,
        trim : true
    },
    state : {
        type : String,
        required : true,
        trim : true
    },
    country: {
        type : String,
        required : true,
        default : true,
        trim : true
    }
}, {timestamps: true})

const Address = mongoose.model("Address", addressSchema)
module.exports = Address