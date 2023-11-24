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
  return <div className="p-5">{bookList}</div>;
};

export default Books;
