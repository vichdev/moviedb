import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";

const RoutesPages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Favorites" element={<Favorites />} />
    </Routes>
  );
};

export default RoutesPages;
