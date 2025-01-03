import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)
