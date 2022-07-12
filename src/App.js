import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/rooms'} element={<Rooms />} />
        <Route path={'/room'} element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
