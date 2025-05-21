const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email already exist"]
    },
    password:{
        type: String,
        required:true,
        minLength: 6
    },
    age:{
        type: Number,
        min:16

    },
    role:{
        type: String,
        enum:["buyer", "seller", "admin"],
        default:"buyer",

    },
    isVerified: {
        type: Boolean,
        default:false
    }
})
const userModel = mongoose.model("users", userSchema)

module.exports = userModel 