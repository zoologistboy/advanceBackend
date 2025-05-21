const MiddlewareTwo = (req, res, next)=>{
    console.log("middleware two ...");
    next()
    

}
module.exports = MiddlewareTwo