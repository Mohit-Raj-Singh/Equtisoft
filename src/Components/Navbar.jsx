import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token") || "";

  console.log(token);

  const handleAuth = () => {
    if (token === "") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    handleAuth();
    console.log(isLoggedIn);
  }, []);

  const navigateLogin = () => {
    navigate("/login");
    setShowMenu(false);
  };
  const navigateSignup = () => {
    navigate("/register");
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setShowMenu(false);
    window.location.reload();
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <a href="/" className="text-2xl font-bold">
                Home
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/task" className="text-gray-300 hover:text-white">
                  Tasks
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isLoggedIn ? (
                <div className="flex items-center">
                  <span className="text-white mr-4">Welcome</span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <button
                    onClick={navigateLogin}
                    className="text-gray-300 hover:text-white"
                  >
                    Sign In
                  </button>
                  <button
                    className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
                    onClick={navigateSignup}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/tasks" className="text-gray-300 hover:text-white">
              Tasks
            </a>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left text-gray-300 hover:text-white py-2"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={navigateLogin}
                  className="block w-full text-left text-gray-300 hover:text-white py-2"
                >
                  Sign In
                </button>
                <button
                  onClick={navigateSignup}
                  className="block w-full text-left text-white hover:bg-gray-700 py-2"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
