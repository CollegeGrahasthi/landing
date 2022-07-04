import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Rooms from './pages/Rooms';
import Home from './pages/Home';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/rooms'} element={<Rooms />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
