import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router"; 
import AuthContext from "../Context/AuthContext";

const LogOutBtn = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await axios.get("http://localhost:5000/auth/logout");
	await getLoggedIn();
	navigate('/');
  };
  return <button onClick={handleLogOut}>Logout</button>;
};

export default LogOutBtn;
