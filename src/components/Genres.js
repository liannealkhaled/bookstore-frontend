import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getAllGenre } from "../Api/genre";
import GenreCard from "./GenreCard";

const Genres = () => {
  const queryClient = useQueryClient();

  const { data: genres, isLoading } = useQuery({
    queryKey: ["genre"],
    queryFn: () => getAllGenre(),
  });
  if (isLoading)
    return <span className="loading loading-dots loading-md"></span>;
  const genreList = genres.map((genre) => (
    <GenreCard genre={genre} key={genre.name} />
  ));

  return (
    <div className="flex justify-center items-center width-full bg-slate-600 h-32">
      {genreList}
    </div>
  );
};

export default Genres;
