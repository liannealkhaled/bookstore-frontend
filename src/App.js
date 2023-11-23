import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { checkToken } from "./Api/auth";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import MyLibrary from "./pages/MyLibrary";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/mylibrary" Component={MyLibrary} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
