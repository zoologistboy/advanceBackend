const CategoryModel = require("../models/category")

const addNewCategory = async(req, res)=>{
    
    
    try {
        const category = await CategoryModel.create(req.body)

        if(!category){
            return res.status(400).json({
                status: "error",
                message:"category not created"
            })
        }

        res.status(201).json({
            status: "success",
            message:"category created successfully",
            category
        })
    } catch (error) {
        console.log(error);
        
    }
}
const allCategory = async(req, res)=>{
    
    
    try {
        const category = await CategoryModel.find()

        if(!category){
            return res.status(400).json({
                status: "error",
                message:"no categories"
            })
        }

        res.status(201).json({
            status: "success",
            message:"category fetched",
            category
        })
    } catch (error) {
        console.log(error);
        
    }
}

module.exports ={
    addNewCategory,
    allCategory
}