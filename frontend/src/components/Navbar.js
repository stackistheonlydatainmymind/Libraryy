import React,{useContext} from 'react'
import{NavLink} from "react-router-dom";
 import { UserContext } from '../App';
import '../Navbar.css';


const Navbar = () => {

  // const {state,dispatch}=useContext(UserContext);
   const RenderMenu = () => {
    const {state, dispatch}=useContext(UserContext)
    if(state){
      return (
         <>
                  <li> <i className="fa fa-home" aria-hidden="true"></i><NavLink to="/">HOME</NavLink></li>
                 <li><i className="fa fa-comment" aria-hidden="true"></i><NavLink to="/about">About</NavLink></li>
                 <li ><i className="fa fa-id-card-o" aria-hidden="true"></i><NavLink to="#box">CONTENTS</NavLink></li>
                 <li><i className="fa fa-info-circle" aria-hidden="true"></i><NavLink to="/services">SERVICES</NavLink></li>
                 <li><i className="fa fa-sign-out" aria-hidden="true"></i><NavLink to="/logout">logout</NavLink></li>

         </>
       )
      }else{
       return(
         <>
          <li> <i className="fa fa-home" aria-hidden="true"></i><NavLink to="/">HOME</NavLink></li>
                 <li><i className="fa fa-comment" aria-hidden="true"></i><NavLink to="/about">About</NavLink></li>
                 <li ><i className="fa fa-id-card-o" aria-hidden="true"></i><NavLink to="#box">CONTENTS</NavLink></li>
                 <li><i className="fa fa-info-circle" aria-hidden="true"></i><NavLink to="/services">SERVICES</NavLink></li>
                  <li><i className="fa fa-sign-in" aria-hidden="true"></i><NavLink to="/login">LOGIN</NavLink></li>
                  <li><i className="fa fa-sign-out" aria-hidden="true"></i><NavLink to="/signup">register</NavLink></li>
              
         </>
       )
      }
   }


  let navbar=document.getElementById("nav");
  let closeButton=document.getElementById("close");
  let hamBarger=document.getElementById("hambarger");
let navigation=  document.getElementById("navigation")
  const Hide=()=>{
navbar.style.display="none";
closeButton.style.display="none";
hamBarger.style.display="block";
navigation.style.flexDirection="row";

  }
  const Show=()=>{
navbar.style.display="flex";
closeButton.style.display="block";
hamBarger.style.display="none";
navigation.style.flexDirection="column";
  }
  return (
    <>
   <div className="blank"> 
        </div>
        <div id="navigation">
            <img   id="logo" src="book_logo.png" alt=""/>
            <div id="navitem">
            <div id="nav">
               <RenderMenu></RenderMenu>
            </div>
          </div>
            <div id="hambarger" onClick={Show}>
                <div className="element"></div>
                <div className="element"></div>
                <div className="element"></div>
            </div>
            <button id="close" onClick={Hide}>X</button>
        </div>
    </>
  )
}
export default Navbar