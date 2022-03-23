import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import Shop from './routes/Shop/Shop'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/home'} element={<HomePage/>}>
          <Route path={'shop'} element={<Shop/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
