import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "../src/RoutePath";
import Home from "../src/pages/Home";
import Register from "../src/pages/Register";

const RoutesFile = () => {
  return ( 
  <>
    <Routes>
      <Route path={RoutePath.Home} element={<Home />} />
      <Route path={RoutePath.Register} element={<Register />} />
    </Routes>
  </>
  )
};
export default RoutesFile;
