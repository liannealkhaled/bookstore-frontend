import React from "react";

const BookCard = (book) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={require("../assest/21142729.jpg")}
          className="rounded-xl border-black"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.book.title}</h2>

        <div className="card-actions">
          <button className="btn btn-primary">VIEW</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
