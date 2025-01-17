// import React from 'react';
import { NavLink } from "react-router"

export default function Sidebar () {

    return (
        <aside className="sidebar">
            <NavLink to="/app"><h3>Activities</h3></NavLink>
            <NavLink to="/app/dashboard"><h3>Dashboard</h3></NavLink>
            <NavLink to="/app/tracks"><h3>Tracks</h3></NavLink>
            <NavLink to="/app/bikes"><h3>Bikes</h3></NavLink>
            <hr />
            <NavLink to="/"><h3>landing</h3></NavLink>
        </aside>
    )
}