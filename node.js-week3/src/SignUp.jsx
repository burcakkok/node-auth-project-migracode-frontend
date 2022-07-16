import React from "react";

const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="" />

        <label for="email">Email</label>
        <input type="email" name="email" id="" />

        <label for="password">Password</label>
        <input type="password" name="password" id="" />

        <button>Sign Up</button>
      </div>
    </>
  );
};

export default SignUp;
