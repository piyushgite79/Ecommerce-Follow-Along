import './App.css'
// eslint-disable-next-line
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import {LoginPage} from './Routes/Route.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>  
  )
}

export default App;