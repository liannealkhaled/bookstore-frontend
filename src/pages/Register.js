import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { register } from "../Api/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/");
    },
  });
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className=" gap-3 rounded-md bg-pink-500 w-[60%] h-[60%] flex flex-col justify-center items-center">
        <h1 className=" font-mono text-[35px] font-bold">Hello new AUTHOR</h1>
        <input
          name="username"
          onChange={handleChange}
          placeholder="username"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
          type="password"
        />
        <input
          name="image"
          onChange={handleChange}
          placeholder="image"
          type="file"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />

        <button
          onClick={() => mutate()}
          className=" rounded-md border-[2px]  px-3 py-1 border-black hover:bg-pink-600 font-bold"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
