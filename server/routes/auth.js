const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req,res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_PASSWORD
            ).toString(),
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
});

//LOGIN
router.post("/login", async (req,res) => {
    try{
        //Checks username for login
        const user = await User.findOne({ 
            username: req.body.username
        });

        !user && res.status(401).json("Wrong credentials!")

        //Checks password for login
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.SECRET_PASSWORD
        );
        
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password && res.status(401).json("Wrong credentials")
        
        //Checks whether user is registered with site before updating cart
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        {expiresIn: "3d"} //how long an access token can be used
        );

        //Send everything but password
        const { password, ...others } = user._doc; //use ._doc to only show the info we want to show


        //Display all info, including access token, excluding password
        res.status(200).json({...others, accessToken});
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router