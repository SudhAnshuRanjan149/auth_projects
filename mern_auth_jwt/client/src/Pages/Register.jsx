import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleSubmit = () => {
	
  };
  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Verify your Password"
          onChange={(e) => setPasswordVerify(e.target.value)}
        ></input>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
