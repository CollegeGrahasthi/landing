import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './pages/Rooms';
import Home from './pages/Home';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home showModal={showModal} setShowModal={setShowModal} />} />
        <Route path={'/rooms'} element={<Rooms showModal={showModal} setShowModal={setShowModal} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
