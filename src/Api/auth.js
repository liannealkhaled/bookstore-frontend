import { jwtDecode } from "jwt-decode";
import instance from ".";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post("/register", formData);
  storeToken(data?.token);
  return data;
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const curentTime = Date.now() / 1000;
    if (decode.exp < curentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const login = async (userInfo) => {
  const { data } = await instance.post("/signin", userInfo);
  storeToken(data?.token);
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};
export { register, login, logout, checkToken, storeToken };
