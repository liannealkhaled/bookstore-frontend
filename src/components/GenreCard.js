import React from "react";

const GenreCard = (genre) => {
  return (
    <div className="m-3">
      <div className=" bg-white rounded-full h-[130px] w-[130px] flex justify-center items-center relative ">
        <div>
          <img
            src="https://cdn4.iconfinder.com/data/icons/books-32/240/book-10-512.png"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              opacity: 1,
              marginBottom: 15,
            }}
          />
        </div>
        <div className="flex flex-row text-[20px] font-bold text-gray absolute mt-16 ">
          <p>{genre.genre.name} </p>
        </div>
      </div>
    </div>
  );
};

export default GenreCard;
