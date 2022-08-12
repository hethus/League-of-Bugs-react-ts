import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from 'react'
import Settings from "./pages/Settings";
import PurchaseBugPoint from "./pages/PurchaseBugPoint";
import PurchaseChampion from "./pages/PurchaseChampion";

interface RouterProps {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const Router = ({logged, setLogged}: RouterProps) => {
  const [stepsIsOpen, setStepsIsOpen] = useState<boolean>(false);

  return (
    <Routes>
      {
        logged ? (
        <>
        <Route path="/" element={<Home setLogged={setLogged} setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/settings" element={<Settings setLogged={setLogged} setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/purchase/bugpoint" element={<PurchaseBugPoint setLogged={setLogged} setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/purchase/champion" element={<PurchaseChampion setLogged={setLogged} setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen} />} />
        </>
        ) : (
        <Route path="/login" element={<Login setLogged={setLogged}/>} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} replace />}/>
    </Routes>
  );
};

export default Router;