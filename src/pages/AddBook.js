// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllGenre } from "../Api/genre";
// import { addBook } from "../Api/book";

// const AddBook = () => {
//   const [bookInfo, setBookInfo] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     if (e.target.name === "bookimage") {
//       setBookInfo({ ...bookInfo, [e.target.name]: e.target.files[0] });
//     } else {
//       setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
//     }
//   };

//   const queryClient = useQueryClient();
//   const [type, setType] = useState("");

//   const { data: genres, isLoading } = useQuery({
//     queryKey: ["genre"],
//     queryFn: () => getAllGenre(),
//   });

//   const { mutate } = useMutation({
//     mutationKey: ["addbook"],
//     mutationFn: () => addBook({ ...bookInfo, genre: type }),
//     onSuccess: () => {
//       navigate("/mylibrary");
//       queryClient.invalidateQueries("books");
//     },
//   });

//   const categorySelectOptions = categories?.map((category) => {
//     return <option value={category._id}>{category.name}</option>;
//   });

//   return (
//     <div className=" h-screen w-screen flex justify-center items-center bg-base-100">
//       <div className=" gap-3  w-[50%] h-[80%] flex flex-col justify-center items-center bg-base-200 rounded-md ">
//         <h1 className="  text-[35px] font-bold  text-amber-950">
//           LOOKS DELICIOUS{" "}
//         </h1>

//         <input
//           name="name"
//           onChange={handleChange}
//           placeholder="Recipe name"
//           className="input input-bordered w-[500px] h-[50px] "
//         />

//         <select
//           className="form-select"
//           onChange={(e) => {
//             setType(e.target.value);
//           }}
//         >
//           <option value="" selected>
//             All
//           </option>
//           {categorySelectOptions}
//         </select>
//         <input
//           name="ingredients"
//           onChange={handleChange}
//           placeholder="Ingredients"
//           className="input input-bordered w-[500px] h-[50px] "
//         />

//         <label className="flex flex-row gap-2">
//           <textarea
//             name="instructions"
//             onChange={handleChange}
//             placeholder="Instructions"
//             className="textarea textarea-bordered textarea-lg w-[500px] h-[100px]"
//           ></textarea>
//         </label>
//         <input
//           type="file"
//           onChange={handleChange}
//           name="recipeimage"
//           className="file-input file-input-bordered w-[500px] h-[50px]"
//         />
//         <button onClick={mutate} className="btn glass  text-gray-600">
//           AADD TO YOUR COLLECTION
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddBook;
