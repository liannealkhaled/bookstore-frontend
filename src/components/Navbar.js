import React, { useContext } from "react";
import { logout } from "../Api/auth";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(false);
    logout();
  };
  return (
    <div className="navbar w-full top-0  mb-1">
      <div className="flex w-full items-center justify-start ">
        {user ? (
          <>
            <NavLink to={"/"}>
              <img
                src={require("../assest/Screen Shot 2023-11-24 at 1.14.41 AM.png")}
                style={{
                  height: 70,
                  width: 500,
                  borderBottomRightRadius: 30,
                }}
              />
            </NavLink>
            <div className="flex justify-end items-end w-full mr-5 ">
              <NavLink
                to="/mylibrary"
                className=" rounded-md px-3 py-1 border-white font-bold bg-gray-700 text-white flex justify-center items-center"
              >
                MY LIBRARY
              </NavLink>
              <Link
                to="/"
                onClick={handleLogout}
                className=" rounded-md px-3 py-1 border-white font-bold text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-end w-full mr-5 gap-2">
            <div className=" flex justify-start items-start w-full ">
              <img
                src={require("../assest/Screen Shot 2023-11-24 at 1.14.41 AM.png")}
                style={{
                  height: 70,
                  width: 400,
                }}
              />
            </div>

            <NavLink to="/login">
              <button className=" rounded-md px-3 py-1 border-white font-bold hover:bg-orange-400 text-gray-700">
                LOGIN
              </button>
            </NavLink>
            <NavLink to="/register">
              {" "}
              <button className=" rounded-md px-3 py-1 border-white font-bold hover:bg-pink-500 text-gray-700">
                REGISTER
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
