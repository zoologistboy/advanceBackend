// const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const upload  = async(req, res, next)=>{
       const {user} = req.body
       console.log(user);
       

        if (!req.body.image) {
        return res.status(403).json({
            status: "error",
            message:"image is required"
        })
     }
    //  return res.send("testing seller")

    //  req.user = user
     next()
     console.log(req.body); 
     

}
module.exports = upload