import React, { useEffect } from 'react'
 import {useContext} from 'react';
import { useNavigate } from 'react-router-dom'
 import { UserContext } from '../App';

const Logout = () => {
     const { dispatch}=useContext(UserContext);
    const navigate =useNavigate();

    useEffect(()=>{
        fetch('/logout',{
            method:"Get",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"

            },
            credentials:"include"
        }).then((res)=>{
             dispatch({type:"USER",payload:false})
            navigate('/login',{replace:true});
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        });
    });
  return (
    <div>Logout ka page</div>
  )
}

export default Logout