import React from 'react'
 import { useReducer,createContext } from 'react'
// import { Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import  Signup from "./components/Signup";
import  Logout from "./components/Logout";
import  Bfirst from "./components/Btech_first";
import  Footer from "./components/Footer";
// import Btech_first from "./components/btech_first";
import  ErrorPage from "./components/Errorpage";
 import { initialState,reducer } from './reducer/UseReducer';
 export const UserContext =createContext();
const App =()=>{

    const [state, dispatch]= useReducer(reducer,initialState);

  return (
   <>
       <UserContext.Provider value={{state, dispatch}}>
       <Navbar/>
       <Routes>
        <Route  exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/btech_first" element={<Btech_first/>}/> */}
        <Route path="/contents" element={<Signup />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/e" element={<ErrorPage />} />
        <Route path="/btech_first" element={<Bfirst/>} />
        </Routes>
        <Footer/>
        </UserContext.Provider>
   </>
  )
}
export default App