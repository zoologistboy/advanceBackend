const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    sucure:false,
    port:587,
    auth:{
        user: process.env.nodemailer_email,
        pass: process.env.nodemailer_pass
    }
})

module.exports = transporter

// transporter.verify((err, success)=>{
//     if (success) {
//         console.log("ready to send email message");
        
//     }else{
//         console.log(err);
        
//     }
// })

// const sendEmail = transporter.sendMail({
//     to:"aminuoluwaseun3@gmail.com",
//     subject:"node class",
//     from:"me myself@gmail.com",
//     sender:"me myself@gmail.com",
//     replyTo:"zooboy@gmail.com",
//     text:"i love dev",
    



// })

// sendEmail() 