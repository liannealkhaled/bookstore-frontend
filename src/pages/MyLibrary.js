import React from "react";
import Navbar from "../components/Navbar";
import Genres from "../components/Genres";
import { Link } from "react-router-dom";

const MyLibrary = () => {
  return (
    <div>
      <Navbar />
      <Genres />
      <div className="flex flex-col items-center w-full gap-5 h-full">
        <div className="flex items-center  gap-2 w-full text-black mt-4">
          <input
            type="text"
            placeholder="Search "
            className=" bg-gray-300 input text-black w-24 md:w-auto ml-5  font-bold"
          />
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-plus-square"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          my list of books
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
