import React  from "react";
import { Routes, Route } from "react-router-dom";
import RoutePath from "./RoutePath";
import Home from "./pages/Home";
import Register from "./pages/Register";

const RoutesFile = () => {
  return ( 
  <>
    <Routes>
    <Route path={RoutePath.content} element={<Home />} />
      <Route path={RoutePath.Home} element={<Home />} />
      <Route path={RoutePath.Register} element={<Register />} />
    
    </Routes>
  </>
  )
};
export default RoutesFile;
