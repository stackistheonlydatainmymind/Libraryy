const express =require("express");
 const router =express.Router();

const bycrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
 const bodyParser=require("body-parser");
 const cookieParser=require("cookie-parser");


require("../db/conn");
const User= require("../model/userSchema");
// const jsonwebtoken = require("jsonwebtoken");

 router.get('/', (req,res)=>{
     res.send(`hello world from the serverrouter`);
 });

router.post('/register',async(req,res)=>{
    const {First ,Last ,email ,course,password ,cpassword}=req.body;
    if(!First || !Last || !email || !course || !password || !cpassword){
        return res.status(422).json({error:"plz filled the field property"});
    }

    try {
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email already Exist"});
        }
        const user =new User({First ,Last ,email ,course,password ,cpassword});
        await user.save();
        console.log("sucess registerd");
        res.status(201).json({message:"user registered successfuly"});
    }catch (err){
        console.log(err);
    }
});

//login route
router.post('/signin',async(req,res) => {
    // console.log(req.body);
    // res.json({message:"awesome"});
    try{
        let token;
          const{email,password}=req.body;
          if(!email || !password){
              return res.status(400).json({error:"filled data"});
          }
          const userlogin = await User.findOne({email:email});
        //   console.log(userlogin);
        if(userlogin){
        const isMatch =await bycrypt.compare(password,userlogin.password);
        //get the token
        token= await userlogin.generateAuthtoken();
        console.log("token is"+token);
        //store the token in cookies
         res.cookie("jwt",token,{
            expires:new Date(Date.now() + 120000000),
           httpOnly:true
       });
         

        if(!isMatch){
            res.status(400).json({error:"invalid credential"});
        }
        else{
            res.json({message:"success"});
        }

     }
        else{
            res.status(400).json({error:"invalid credential"});
        }
    
    }catch(err){
        console.log(err);
    }
})

 module.exports=router;
