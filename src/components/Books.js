import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getAllBooks } from "../Api/book";
import BookCard from "./BookCard";

const Books = () => {
  const queryClient = useQueryClient();

  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: () => getAllBooks(),
  });
  const bookList = books?.map((book) => (
    <BookCard book={book} key={book.name} />
  ));
  return (
    <div className="p-5 flex flex-row flex-wrap gap-2 justify-center">
      {bookList}
    </div>
  );
};

export default Books;
