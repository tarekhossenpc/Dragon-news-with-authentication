
import React from "react";
// import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  // const {name} = useContext(AuthContext)
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-4">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
        
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center">Don't Have An Account?<Link className="text-red-500" to='/auth/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
