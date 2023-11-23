import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../Api/auth";

const Login = () => {
  const [userInfo, setUserInfo] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/");
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-white">
      <div className=" gap-3  w-[50%] h-[50%] flex flex-col justify-center items-center bg-orange-400 rounded-md ">
        <h1 className=" font-mono text-[35px] font-bold"> WELCOME BACK </h1>
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
        <button
          onClick={() => mutate()}
          className="border-[2px]  px-3 py-1 border-black font-bold hover:bg-orange-500 rounded-md "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
