// import express
const express = require("express")
// app
const app = express()
const cors = require("cors")
app.use(require("morgan")())


app.use(cors())
app.use(express.json())

// connectToDB   
require("./config/connectDb")
//connect nodemailer
require("./services/nodemailer/transporter")
// listen to port
app.listen(4003, ()=>{
    console.log('listening to port 4003');
})

const userRouter = require("./routes/userRouter")

const categoryRouter = require("./routes/categoryRouter")

const blogPostRouter = require("./routes/blogPostRouter")

const authRouter = require("./routes/authRouter")
const productRouter = require("./routes/productRouter")



app.use("/api/auth", authRouter)


app.use("/api/users", userRouter)

app.use("/api/categories", categoryRouter)

app.use("/api/blog", blogPostRouter)

app.use("/api/product", productRouter)