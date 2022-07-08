import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './pages/Rooms';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/rooms'} element={<Rooms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
