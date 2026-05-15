import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
             <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-4">Register your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input type="email" className="input" placeholder="Enter Your Name" />
            {/* Photo */}
            <label className="label">Photo Url</label>
            <input type="email" className="input" placeholder="Enter your Photo" />
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
        
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;