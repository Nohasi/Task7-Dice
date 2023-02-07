import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { CoinflipPage } from './components/CoinflipPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes to automatically redirect users */}
          <Route path="coinflip" element={<CoinflipPage/>}/>
          <Route path="" element={<Navigate to="/coinflip"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
