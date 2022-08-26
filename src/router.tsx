import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from 'react'
import SettingsChampions from "./pages/SettingsChampions";
import PurchaseBugPoint from "./pages/PurchaseBugPoint";
import PurchaseChampion from "./pages/PurchaseChampion";
import { useAuth } from "./contexts/auth";
import SettingsClasses from "./pages/SettingsClasses";
import SettingsBugPoints from "./pages/SettingsBugPoints";

const Router = () => {
  const [stepsIsOpen, setStepsIsOpen] = useState<boolean>(false);
  const { logged } = useAuth();

  return (
    <Routes>
      {
        logged ? (
        <>
        <Route path="/" element={<Home setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />

        <Route path="/settings/champions" element={<SettingsChampions setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/settings/classes" element={<SettingsClasses setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/settings/bugpoints" element={<SettingsBugPoints setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/settings/users" element={<SettingsChampions setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />

        <Route path="/purchase/bugpoint" element={<PurchaseBugPoint setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen}/>} />
        <Route path="/purchase/champion" element={<PurchaseChampion setStepsIsOpen={setStepsIsOpen} stepsIsOpen={stepsIsOpen} />} />
        </>
        ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} replace />}/>
    </Routes>
  );
};

export default Router;