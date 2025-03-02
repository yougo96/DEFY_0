import React from 'react'
import ReactDOM  from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
// Libs

// Files
import './index.css'

import App from './pages/app/app.jsx'
import Home from './pages/app/home.jsx'

import Static from './pages/static/static.jsx'
import Landing from './pages/static/landing.jsx';
import Login from './pages/static/login.jsx';
import Register from './pages/static/register.jsx';

import Users from './pages/app/users.jsx';
import UsersId from './pages/app/usersId.jsx';
import Activities from './pages/app/activities.jsx';
import ActivitiesId from './pages/app/activitiesId.jsx';
import PostActivities from './pages/app/postActivities.jsx';
import Tracks from './pages/app/tracks.jsx';
import Bikes from './pages/app/bikes.jsx';

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

        <Route path="activities" element={<Activities />} />
        <Route path="activities/:id" element={<ActivitiesId />} />
        <Route path="activities/add" element={<PostActivities />} />
        
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UsersId />} />

        <Route path="tracks" element={<Tracks />} />

        <Route path="bikes" element={<Bikes />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
)
