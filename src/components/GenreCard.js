import React from "react";

const GenreCard = (genre) => {
  return (
    <div className="flex flex-row text-[20px] text-gray gap-4 bg-orange-400 ">
      {genre.genre.name}
    </div>
  );
};

export default GenreCard;
