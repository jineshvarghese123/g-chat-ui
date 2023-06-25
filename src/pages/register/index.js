import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [user, setUser] = useState({
 name:"",
 email:"",
 password :""
  })

  const registerUser = (e)=>{
    console.log(user)

  }
  return (
    <div className='h-screen bg-primary flex items-center justify-center'>
      <div  className='bg-white shadow-md p-5 flex flex-col gap-5 w-96' >
        <h1 className='text-2xl f uppercase font-semibold text-primary text-center'>G-Chat Register</h1>
        <hr/>
        <input type='text' value={user.name} 
        onChange={(e)=>{setUser({...user, name:e.target.value})}}
        placeholder='enter your name'></input>
         <input type='email' value={user.email} 
        onChange={(e)=>{setUser({...user, email:e.target.value})}}
        placeholder='enter your email'></input>
        <input type='password' value={user.password} 
        onChange={(e)=>{setUser({...user, password:e.target.value})}}
        placeholder='enter your password'></input>
        <button className='contained-btn bg-primary'  onClick={registerUser}>Register</button>
        <Link to={'/login'} className='underline underline-offset-1'> Already Have an account ? Login</Link>
      </div>
      
    </div>
  )
}

export default Register