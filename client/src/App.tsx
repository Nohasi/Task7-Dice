import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { DicePage } from './components/DicePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes to automatically redirect users */}
          <Route path="dice" element={<DicePage/>}/>
          <Route path="" element={<Navigate to="/dice"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
