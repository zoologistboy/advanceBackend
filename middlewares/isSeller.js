// const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const isSeller  = async(req, res, next)=>{
       const {user} = req

        if (req.user.role !== "seller") {
        return res.status(403).json({
            status: "error",
            message:"forbidden access 'use have to be a seller to access this page"
        })
     }
    //  return res.send("testing seller")

    //  req.user = user
     next() 

    

    // next()
}
module.exports = isSeller