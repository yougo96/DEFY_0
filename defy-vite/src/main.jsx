import React from 'react'
import ReactDOM  from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
// Libs
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// Files
import './index.css'
import App from './App.jsx'
import { ProfileBadge } from './components/profileBadge.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <MantineProvider defaultColorScheme="dark">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users/:id" element={<ProfileBadge />} />
    </Routes>
  </BrowserRouter>
  </MantineProvider>
)
