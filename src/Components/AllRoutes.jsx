import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Task from "../Pages/Task";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
};
