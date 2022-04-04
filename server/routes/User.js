const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken")

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
    if(req.body.password) {
        //Encrypt updated password
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD).toString();
    }

    try{
        //MongoDB Function
        //Be sure to update Header in Postman with token.
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;