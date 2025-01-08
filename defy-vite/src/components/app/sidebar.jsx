// import React from 'react';
import { NavLink } from "react-router"

export default function Sidebar () {

    return (
        <sidebar>
            <NavLink to="/app"><h3>Activitys</h3></NavLink>
            <NavLink to="/app/dashboard"><h3>Dashboard</h3></NavLink>
            <NavLink to="/app/tracks"><h3>Tracks</h3></NavLink>
            <NavLink to="/app/bikes"><h3>Bikes</h3></NavLink>
        </sidebar>
    )
}