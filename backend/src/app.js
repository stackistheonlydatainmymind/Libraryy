const express =require("express");
const cors =require("cors");
require('dotenv').config();
const app =express();

const bycrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
 const bodyParser=require("body-parser");
 const cookieParser=require("cookie-parser");
// console.log(process.env.SECRET_KEY);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

// const res = require("express/lib/response");
const mongoose=require("mongoose");
const port =process.env.PORT || 9000;
require("./db/conn");
const User= require("./model/userSchema");
const res = require("express/lib/response");
const authenticate=require("./middleware/authenticate");
app.use(express.json());


app.get('/about',authenticate,(req,res)=>{
     console.log("this is about us page");
     res.send("hello about world from the server");
});

 app.get('/logout',(req,res)=>{
     console.log('hello logout');
     res.clearCookie('jwttoken',{path:'/login'});
     res.status(200).send('User logout');
 });


app.post('/register',async(req,res)=>{
    const {First ,Last ,email ,course,password ,cpassword}=req.body;
    if(!First || !Last || !email || !course || !password || !cpassword){
        return res.status(422).json({error:"plz filled the field property"});
    }

    try {
       
        const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({error:"Email already Exist"});
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
app.post('/signin',async(req,res) => {
    // console.log(req.body);
    // res.json({message:"awesome"});
    try{
        
          const{email,password}=req.body;
          if(!email || !password){
              return res.status(400).json({error:"filled data"});
          }
          const userlogin = await User.findOne({email:email});
        //   console.log(userlogin);
        if(userlogin){
        const isMatch =await bycrypt.compare(password,userlogin.password);
        //get the token
       const token= await userlogin.generateAuthtoken();
        console.log("token is"+token);
        //store the token in cookies
         res.cookie("jwttoken",token,{
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




app.listen(port, () => {
    console.log(`server is run on ${port}`);
})