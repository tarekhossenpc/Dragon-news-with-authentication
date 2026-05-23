import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user).catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="font-semibold text-2xl text-center py-4">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label" for="Name">
                Your Name
              </label>
              <input
                name="name"
                id="Name"
                type="text"
                className="input"
                placeholder="Enter Your Name"
                required
              />
              {/* Photo */}
              <label className="label" for="pic">
                Photo Url
              </label>
              <input
                id="pic"
                name="photo"
                type="text"
                className="input"
                placeholder="Enter your Photo"
              />
              {/* Email */}
              <label className="label" for="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* Password */}
              <label className="label" for="pass">
                Password
              </label>
              <input
                name="password"
                id="pass"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
