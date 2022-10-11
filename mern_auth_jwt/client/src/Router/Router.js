import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/layouts/Navbar";
import Customers from "../Pages/Customers";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
