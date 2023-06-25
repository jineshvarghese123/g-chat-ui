import React, { useState } from "react";
import { Link } from "react-router-dom";



function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async(e)=>{
    console.log(user)

  }
   
  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="bg-white shadow-md p-5 flex flex-col gap-5 w-96">
        <h1 className="text-2xl f uppercase font-semibold text-primary text-center">
          G-Chat Login
        </h1>
        <hr />
        <input
          type="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }} placeholder="enter your email"
        ></input>
        <input
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          placeholder="enter your password"
          onClick={loginUser}
        ></input>
        <button className="contained-btn bg-primary">Login</button>
        <Link to={'/register'} className='underline underline-offset-1'> dont have an account ? Register</Link>
      </div>
    </div>
  );
}

export default Login;
