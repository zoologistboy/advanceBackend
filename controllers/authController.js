const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
const sendVerificationEmail = require("../services/nodemailer/sendVerificationEmail")
// const token = require("../utils/randomString")
const generateRandomString = require("../utils/randomString")
const { verify } = require("../services/nodemailer/transporter")

const signup = async (req, res, next) => {
    //encrpt by bcrypt

    //generate token

    const {password, email, name} = req.body
    try {
        const salt = await bcrypt.genSalt(10)

        const hashpassword = await bcrypt.hash(password, salt)

        const token = generateRandomString(8)

        const verificationExp = Date.now() + 300000

        const user = await userModel.create({...req.body, password:hashpassword, verificationToken:token, verificationExp})
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
        sendVerificationEmail(email, userFirstName, token)

        res.status(201).json({
            status:"success",
            message:"Sign up successful, Check your email to verify"
        })
     
        
            
    } catch (error) {
        console.log(error),
        next(error)
        // res.status(500).json({
        //     message: "error: server error"
        // })
      
    }
}

const verifyEmail = async(req, res, next)=>{
            const {token} = req.params
            try {
                const user = await userModel.findOne({verificationToken:token})
                if (!user) {
                    return res.status(400).json({
                        status:"error",
                        message:"invalid token/user has been verified"
                    })
                }
                if (user.verificationExp < Date.now()) {
                    return res.status(403).json({
                        status:"error",
                        message:"verification timed out"
                    })
                }
                await userModel.findByIdAndUpdate(user._id,{verificationExp:null, verificationToken:null, isVerified:true})
                res.status(200).json({
                    status:" success",
                    message:"your email has been successfully verified"
                })
            } catch (error) { 
                console.log(error),
                next(error)
                
            }

        }


const login = async (req, res, next) => {
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
        next(error)
        // res.status(500).json({
        //     message: "error"
        // })
        
    }
}

module.exports ={
    signup,
    login,
    verifyEmail
}