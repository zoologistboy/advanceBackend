const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const mongoDbUri = process.env.mongo_uri

const connectToDB = async ()=>{

    console.log("mongo");
    

    try {
        const connected = await mongoose.connect(mongoDbUri)

        if (connected) {
            console.log("mongo connected");
        }
    } catch (error) {
        console.log(error);
        
    }
}

connectToDB()
module.exports = mongoDbUri