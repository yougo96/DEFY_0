import React from 'react'
import ReactDOM  from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
// Libs

// Files
import './index.css'

import App from './pages/app/app.jsx'
import Home from './pages/app/home.jsx'
import User from './pages/app/user.jsx';

import Static from './pages/static/static.jsx'
import Landing from './pages/static/landing.jsx';
import Login from './pages/static/login.jsx';
import Register from './pages/static/register.jsx';
import Track from './pages/app/track.jsx';
import Bike from './pages/app/bike.jsx';

import NotFound from './pages/404.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Static />}>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path='app' element={<App />}>
        <Route index element={<Home />} />
        <Route path="users/:id" element={<User />} />
        <Route path="tracks" element={<Track />} />
        <Route path="bikes" element={<Bike />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
)
