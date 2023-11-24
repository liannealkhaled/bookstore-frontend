import React from "react";

const GenreCard = (genre) => {
  return (
    <div className="m-3">
      <ul className=" bg-amber-900 rounded-full h-[150px] w-[150px] flex justify-center items-center">
        <li>
          <div className="flex flex-row text-[20px] text-gray">
            {genre.genre.name}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GenreCard;
