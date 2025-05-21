const transporter = require("./transporter")
const sendVerificationEmail=(email, userFirstName, token)=>{
    const options ={
        to: email,
        subject:"verify your account",
        from:"jumia jumia@gmail.com",
        replyTo:"jumia@gmail.com",
        html:`
        <div>Hi ${userFirstName}
        <a href="${process.env.client_domain}/verify/${token}> verify my email</a>
        </div>

        
        `
    }

    
    transporter.sendMail(options, (err, info)=>{
            if(err){
                console.log(err.message);
                
            }else{
                console.log("email was sent successfully");
                console.log(info);
                
            
            }
    })
}
 module.exports = sendVerificationEmail