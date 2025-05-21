// // const MiddlewareOne = (req, res, next)=>{
// //     console.log("middleware one ...");
// //     next()
    

// // }

// const isLoggedIn = (req, res, next)=>{
//     let token;
//     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
//         token = req.headers.authorization.split("")[1]
//         console.log(token);
        
//     }
//     if (!token) {
//         return res.status(403).json({
//             status: "error",
//             message:"you need a token to access this page/ you need to log in"
//         })
//     }
//     return res.send("testing token")
// }
// module.exports = isLoggedIn