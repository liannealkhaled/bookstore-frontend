import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Genres from "../components/Genres";
import Books from "../components/Books";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center w-full h-32">
        <div className=" flex flex-row bg-gray-300 w-[900px] h-20 justify-center items-center rounded-xl">
          <div className=" text-white text-[25px] font-semibold ">
            FIND SOMETHING INTRESTING ?
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search "
              className=" input input-bordered w-[400px] border-gray-800 h-9 rounded-3xl ml-4 "
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Genres />
      <Books />
    </div>
  );
};

export default Home;
