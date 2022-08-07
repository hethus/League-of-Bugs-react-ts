import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from 'react'
import Settings from "./pages/Settings";
import PurchaseBugPoint from "./pages/PurchaseBugPoint";
import PurchaseChampion from "./pages/PurchaseChampion";

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
        <Route path="/" element={<Home setLogged={setLogged}/>} />
        <Route path="/settings" element={<Settings setLogged={setLogged}/>} />
        <Route path="/purchase/bugpoint" element={<PurchaseBugPoint setLogged={setLogged}/>} />
        <Route path="/purchase/champion" element={<PurchaseChampion setLogged={setLogged}/>} />
        <Route path="/login" element={<Login setLogged={setLogged}/>} />
    </Routes>
  );
};

export default Router;