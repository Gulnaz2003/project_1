import React from "react";
import Registration from "./Containers/Registration/Registration";
import ChooseRole from "./Containers/ChooseRole/ChooseRole";
import { Route, Routes } from "react-router-dom";
import ChooseBox from "./Containers/ChooseBox/ChooseBox";
import Card from "./Containers/Card/Card";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/choose-role" element={<ChooseRole />} />
      <Route path="/choose-box" element={<ChooseBox />} />
      <Route path="/Card" element={<Card />} />
    </Routes>
  );
};
export default App;
