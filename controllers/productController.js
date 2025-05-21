const productModel = require("../models/product")



const allProducts = async(req, res)=>{
    try {
        const products = await productModel.find().populate('user category')//("seller category")
        if (!products) {
          return res.status(400).json({
            status: "error",
            message: "Cant fetch any products"
          })
            
        }
        res.status(200).json({
            status: "sucessful",
            message:"products fetched!",
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"error"
        })
        
    }
}
const addProducts = async(req, res)=>{
    try {
        const product = await productModel.create({...req.body, user:req.user_id})//(.../req.body, seller: req.user_id)
        if (!product) {
          return res.status(400).json({
            status: "error",
            message: "Cant add any product"
          })
            
        }
        res.status(201).json({
            status: "sucessful",
            message:"product added!",
            product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"error"
        })
        
    }
}

module.exports = {
    allProducts,
    addProducts
}