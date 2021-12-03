import React from 'react';
import {Routes, Route} from 'react-router-dom';
import RoutePath from './RoutePath';
import Home from './pages/Home';

const RoutesFile = () => {
    <>
    <Routes>
    <Route path={RoutePath.home} element={<Home />} />
    </Routes>
    </>

}
export default RoutesFile;
