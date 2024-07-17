import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
export default function Login() {
  const a="success";
  const[name,setname]=useState();
  const[pass,setpass]=useState();
  const navigate=useNavigate();
function handle(e){
  e.preventDefault();
  axios.post('http://localhost:5000/login',{
   name,pass
  })
  .then(result=>{
   if(result.data==a){
    console.log(result.data);
  navigate('/home')
}
else{
  console.log("fail");
}
        
   }
  )
  .catch(err=>console.log(err))
 

}
  
  return (
    <div className='sig1'><center className='centers'>
    <form onSubmit={handle}>
    <div className='signin'>
       <div><input type='text' value={name}  placeholder='name' onChange={(e)=>setname(e.target.value)}></input></div>
       <div><input type='text' value={pass} placeholder='pass' onChange={(e)=>setpass(e.target.value)}></input></div>

   </div><button type='submit' >login</button>
   <p>don't have an account ?</p>
   <NavLink to='/register'><button>register account</button></NavLink>
   </form>
   
   </center>
       </div>
  )
}
