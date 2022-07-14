import React from "react";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
      <label for="username">Username</label>
        <input type="text" name="username" id="" />

        <label for="password">Password</label>
        <input type="password" name="password" id="" />
        
        <button>Login</button>
      </div>
    </>
  );
};

export default Login;
