import React from "react";

const BookCard = (book) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={require("../assest/21142729.jpg")} />
      </figure>
      <div className="card-body flex justify-end items-center">
        <h2 className="card-title flex justify-center items-center">
          {book.book.title}
        </h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
