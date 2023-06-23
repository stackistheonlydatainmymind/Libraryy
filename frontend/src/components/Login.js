import React, {useContext, useState} from 'react'
import '../App.css';
import{NavLink ,useNavigate} from "react-router-dom";
 import { UserContext } from '../App';


const Login = () => {

 const {state, dispatch}=useContext(UserContext);
  const navigate=useNavigate();
  const [email,setEmail] =useState('');
  const [password,setPassword]=useState('');

const loginUser = async (e) => {
  e.preventDefault();
  const res = await fetch("/signin" , {
    method:"POST",
    headers :{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({
     email,password
    })
   
  });
  const data=res.json();
  if(res.status ===400 || !data)
  {
    window.alert("invalid credential");

  }else{
     dispatch({type:"USER", payload:true})
    window.alert("login successful");
    navigate("/");

  }
}

  return (
    <>
    <div className="register">
    <div className="sign-up-now">
    
    <form method="POST">
        <h1>Login Here</h1>
        <input type="text" className="input-box" 
        value ={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="e-mail id" required name="email" />
        <br/>
        <input type="password" className="input-box"  
         value ={password}
         onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password" required  name="password"/>
        <br/>
        <input type="submit" className="input-box" 
        value="loginUser"
        onClick={loginUser}
        />
    </form>
        <p> Don`t have an account?
            <NavLink id="link"  to="register">Sign-Up-Here</NavLink><br/>
            <NavLink id="link"  to="register">Forget Password</NavLink>
        </p>
        </div>
        </div>
        </>
  );
}

export default Login