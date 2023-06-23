
const jwt =require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose =require("mongoose");


const userSchema = new mongoose.Schema({
    First : {
        type:String,
       required :true
   },

   Last : {
       type:String,
       required:true
   },
 
   email :{
       type:String,
       required:true,
       unique:true
   },
   course :{
       type:String,
       required:true
   },
   password:
   {
       type:String,
       required:true
   },
   cpassword:
   {
       type:String,
       required:true
   },

    tokens:
    [{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.pre('save',async function(next){
    console.log("hi from inside");
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,12);
        this.cpassword =await bcrypt.hash(this.cpassword,12);
    }
    next();
});

//we are generating the token 
userSchema.methods.generateAuthtoken =async function () {
    try {
        let token =jwt.sign( {_id:this._id},process.env.SECRET_KEY);
        this.tokens =this.tokens.concat({token:token});
        await this.save();
        console.log(token);
        return token;

    }catch(err){
        console.log(err);
    }
}
const  User =mongoose.model('USER',userSchema);
module.exports =User;
