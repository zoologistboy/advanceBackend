const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
const sendVerificationEmail = require("../services/nodemailer/sendVerificationEmail")

const signup = async (req, res) => {
    //encrpt by bcrypt

    //generate token

    const {password, email, name} = req.body
    try {
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password, salt)
        const user = await userModel.create({...req.body, password:hashpassword})
        if(!user){
            return res.status(400).json({
                status:"error",
                message:"You can not sign up"
            })
        }

        //first from full name
        const userFirstName = name.split(" ")[0]
        console.log(name);
        console.log(userFirstName);
        
        

        //generate a one time token


        //send verification email
        sendVerificationEmail(email, userFirstName)

        res.status(201).json({
            status:"success",
            message:"Sign up successful, you can now login"
        })
            
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error: server error"
        })
        
    }
}

const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                status:"error",
                message:"Email or Password incorrect"
            })
        }

        const passwordCorrect = await bcrypt.compare(password, user.password)
        if(!passwordCorrect){
            return res.status(400).json({
                status:"error",
                message:"Email or Password incorrect"
            })
        }

        const accesstoken = await jwt.sign({id:user._id, email: user.email},process.env.jwt_secret,{expiresIn: process.env.expireToken})
        res.status(200).json({
            status:"success",
            message:"Sign In Successfully",
            accesstoken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error"
        })
        
    }
}

module.exports ={
    signup,
    login
}