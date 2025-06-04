const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "provide a name"]
    },
    description:{
        type: String,
        required:[true, "Description is required."]
    },
    price:{
        type: Number,
        required:[true, "price is required."]
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    image:{
        type:String,
        required:true
    }
})

const productModel = mongoose.model("products", productSchema)

module.exports = productModel