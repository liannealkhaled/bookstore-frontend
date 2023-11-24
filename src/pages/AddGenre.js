import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addGenre } from "../Api/genre";

const AddGenre = () => {
  const queryClient = useQueryClient();
  const [genreInfo, setGenreInfo] = useState("");
  const handleChange = (e) => {
    setGenreInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate } = useMutation({
    mutationKey: ["addgenre"],
    mutationFn: () => addGenre(genreInfo),
    onSuccess: () => {
      queryClient.invalidateQueries("genre");
    },
  });
  return (
    <div className="">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <input
            name="genre"
            onChange={handleChange}
            placeholder="genre"
            className="w-[100%] h-[50px] rounded-lg px-5 border-[2px] border-gray-600 py-1"
          />
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => mutate()} className="btn">
                ADD
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddGenre;
