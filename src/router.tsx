import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from 'react'

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
      {logged ? (
      <Route path="/" element={<Home setLogged={setLogged}/>} />
      ) : (
      <Route path="/login" element={<Login setLogged={setLogged}/>} />
      )}

    </Routes>
  );
};

export default Router;