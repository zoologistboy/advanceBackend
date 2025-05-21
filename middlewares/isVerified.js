// const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const isVerifed  = async(req, res, next)=>{
       const {user} = req

        if (req.user.isverifed === false) {
        return res.status(403).json({
            status: "error",
            message:"forbidden access 'use have to be a verified seller to access this page"
        })
     }
    //  return res.send("testing seller")

    //  req.user = user
     next()

    

    // next()
}
module.exports = isVerifed