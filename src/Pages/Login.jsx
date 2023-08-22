import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const Login = ({ onLogin }) => {
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //   const onLogin = (token) => {
  //     const decodedToken = JSON.parse(atob(token.split(".")[1]));
  //     setUsername(decodedToken.username);
  //     setIsLoggedIn(true);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://calm-plum-fox-boot.cyclic.cloud/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pass }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        localStorage.setItem("token", data.token);
        alert("User Login Successfully.")
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
