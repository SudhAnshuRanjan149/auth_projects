import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import AuthContext from "../Context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerData = { email, password, confirmPassword };

      const response = await axios.post(
        "http://localhost:5000/auth/",
        registerData
      );

      if (response.data.message === "User registered successfully.") {
        await getLoggedIn();
        navigate("/customers");
      }
    } catch (err) {
      console.error(err);
    }
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
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
