import React from "react";

const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" id="" />

        <label for="password">Password</label>
        <input type="password" name="password" id="" />

        <button>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;
