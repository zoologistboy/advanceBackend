// import express
const express = require("express")
// app
const app = express()
const cors = require("cors")
const morgan = require("morgan")
app.use(morgan("dev"))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// connectToDB   
require("./config/connectDb");
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
const errorHandler = require("./middlewares/errorHandler")



app.use("/api/auth", authRouter)


app.use("/api/users", userRouter)

app.use("/api/categories", categoryRouter)

app.use("/api/blog", blogPostRouter)

app.use("/api/product", productRouter) 

app.all("{*any}", (req, res)=>{
   res.send(`${req.method} ${req.originalUrl} is not an endpoint on this server`)
})

app.use(errorHandler)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(err.status || 500).json({
//         status: "error",
//         message: err.message || "Internal Server Error"
//     });
// });
