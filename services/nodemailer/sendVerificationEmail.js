const transporter = require("./transporter");

const sendVerificationEmail = (email, userFirstName, token) => {
    const verificationLink = `${process.env.client_domain}/auth/verify/${token}`;
    
    const options = {
        to: email,
        subject: "Verify Your Jumia Account",
        from: "Jumia <jumia@gmail.com>",
        replyTo: "jumia@gmail.com",
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    text-align: center;
                    padding: 10px 0;
                }
                .logo {
                    max-width: 150px;
                }
                .content {
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 5px;
                    margin: 20px 0;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #FF6B00;
                    color: white !important;
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: bold;
                    margin: 15px 0;
                }
                .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #777;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <img src="https://example.com/logo.png" alt="Jumia Logo" class="logo">
            </div>
            <div class="content">
                <h2>Hi ${userFirstName},</h2>
                <p>Thank you for creating an account with Jumia. Please verify your email address to complete your registration.</p>
                
                <p>
                    <a href="${verificationLink}" class="button">Verify My Email</a>
                </p>
                
                <p>Or copy and paste this link into your browser:</p>
                <p><a href="${verificationLink}">${verificationLink}</a></p>
                
                <p>If you didn't create an account with Jumia, you can safely ignore this email.</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Jumia. All rights reserved.</p>
                <p>Jumia, 123 Marketplace Street, Business City</p>
            </div>
        </body>
        </html>
        `,
        text: `Hi ${userFirstName},\n\nThank you for creating an account with Jumia. Please verify your email by clicking the following link:\n\n${verificationLink}\n\nIf you didn't create an account with Jumia, you can safely ignore this email.\n\nBest regards,\nThe Jumia Team`
    };

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.error("Error sending verification email:", err.message);
        } else {
            console.log("Verification email sent successfully:", info.response);
        }
    });
};

module.exports = sendVerificationEmail;