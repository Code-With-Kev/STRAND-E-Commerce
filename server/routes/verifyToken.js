const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token
    if(authHeader){
        //Takes token from Header in Postman, not including the space after Bearer
        const token = authHeader.split(" ")[1];
        
        //Take the token and secret key. Returns either an error or user data
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) res.status(403).json("Token is not valid or expired!")
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You are not authenticated")
    }
};

//If the user is an admin or id matches the id in url, then this user is allowed to update (ex Cart)
const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not allowed to be in this area")
        }
    })
}

//Only if this user is an admin are they allowed to update (ex Products)
const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        } else {
            res.status(403).json("You are not allowed to be in this area")
        }
    })
}


module.exports = { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
}