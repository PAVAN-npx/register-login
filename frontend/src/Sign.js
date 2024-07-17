import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { NavLink } from 'react-router-dom';
import './All.css'
export default function Sign() {
  const navigate= useNavigate();
    const[name,setname]=useState();
    const[pass,setpass]=useState();
    const[mail,setmail]=useState();
    const[brandn,setbrandn]=useState(true);
    function handle(e){
        e.preventDefault();
        axios.post('http://localhost:5000/register',{
         name,pass,mail

        })
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
        navigate('/login')
       setbrandn(false);
    }
  return (
    <div className='sig1'><center className='centers'>
 <form onSubmit={handle}>
 <div className='signin'>
    <div><input type='text' value={name}  placeholder='name' onChange={(e)=>setname(e.target.value)}></input></div>
    <div><input type='text' value={pass} placeholder='pass' onChange={(e)=>setpass(e.target.value)}></input></div>
    <div><input type='text' value={mail} placeholder='mail' onChange={(e)=>setmail(e.target.value)}></input></div>
</div><button type='submit' >submit</button>
<p>already have an account ?</p>
<NavLink to='/login'><button>login account</button></NavLink>
</form>

</center>
    </div>
  )
}
