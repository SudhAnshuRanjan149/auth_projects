import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import AuthContext from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };

      const response = await axios.post(
        "http://localhost:5000/auth/login",
        loginData
      );

      if (response.data.message === "user login successful") {
        await getLoggedIn();
		navigate('/customers');
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
