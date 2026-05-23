import React, { useContext } from "react";
// import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log("credential is error:", error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center py-4">
          Login your account
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            <label className="label" for="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              id="email"
              required
            />
            <label className="label" for="password">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              required
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center">
            Don't Have An Account?
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
