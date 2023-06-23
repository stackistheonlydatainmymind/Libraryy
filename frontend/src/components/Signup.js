import React ,{useState} from 'react'
 import '../App.css';
import{NavLink} from "react-router-dom";
import{useNavigate} from "react-router-dom";

const Signup = () => {

  const navigate =useNavigate();

  const [user,setUser]=useState({
    First:"",Last:"",email:"",password:"",cpassword:"",course:"",
  });

let name,value;
  const handleInputs =(e) =>{
    console.log(e);
    name=e.target.name;
    value =e.target.value;

    setUser({...user, [name]:value});
  }


const PostData = async (e) =>{
  e.preventDefault();
  const {First ,Last ,email ,course,password ,cpassword} =user;
   const res = await fetch("/register",{
     method:"POST",
     headers :{
       "Content-Type" : "application/json"
     },
     body:JSON.stringify({
      First ,Last ,email ,course,password ,cpassword

     })
   });
   const data = await res.json();
   if(data.status === 422 || !data)
   {
     window.alert("invalid registration");
     console.log("invalid registration");
   }
   else
   {
    window.alert("success registration");
    console.log("success registration");
    navigate('/login');
   }


} 

  
  return (
    <>
    <div className="register">
       <form method ="POST"> 
       <div className="sign-up-now">
           <h1>Sign up Now</h1>
          <input type="text" className="input-box" name="First"  autoComplete='off' 
          value={user.First}
          onChange={handleInputs}
          placeholder="First name*" required/><br/>
          <input type="text" className="input-box" name="Last" autoComplete='off' 
          value={user.Last}
          onChange={handleInputs}
          placeholder="Last name*" required/>
          <br/>
          <input type="email" className="input-box" name="email" autoComplete='off' 
          value={user.email}
          onChange={handleInputs}
          placeholder="Enter your email*" required/>
          <br/>
          <input type="password" className="input-box" name="password" autoComplete='off' 
          value={user.password}
          onChange={handleInputs}
          placeholder="Password*" required/>
          <br/>
           <input type="password" className="input-box" name="cpassword" autoComplete='off' 
           value={user.cpassword}
           onChange={handleInputs}
           placeholder="Confirm Password*" required/>
          <br/>
          <select name= "course"
          value={user.course}
          onChange={handleInputs}
           id= "course">
              
              <option value="">--- Select course ---</option>
              <option value="btech">B-Tech</option>
              <option value="bsc">B-Sc</option>
              <option value="diploma">Diploma</option>
              <option value="mtech">M-Tech</option>
              <option value="mba">MBA</option>
          </select>
                {/* Male <input type="radio" name="gender"  value ={user.gender} onChange={handleInputs} id="gender" />
               Female <input type="radio" name="gender"  value ={user.gender} onChange={handleInputs} id="gender" /> */}
           <br/>
           <input type="submit" className="input-box" onClick={PostData} value="Register" />
      </div>
    </form>
  
   
    <div className="sm-box">
    <p>Already have an account?
        <NavLink id="link" to="/login"> &nbsp; Login-here</NavLink>
    </p>
   </div>
   </div>
 
   </>
  
  );

}
export default Signup