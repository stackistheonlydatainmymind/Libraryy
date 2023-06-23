const jwt =require('jsonwebtoken');
const User =require("../model/userSchema");

const Authenticate= async(req,res,next)=>{

    try{
        const token=req.cookies.jwttoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        const rootUser =await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            throw new error('user not found');
        }
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();

    }catch(err){
        res.status(401).send('Unauthorised:no token provided');
    }
}
module.exports=Authenticate