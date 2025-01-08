// import React from 'react';
import { NavLink } from "react-router"

export default function Header () {

    return (
        <header>
            <NavLink to="/app"><h1 className="defy">DEFY</h1></NavLink>
            <NavLink to="/app/users/3"><img className="avatar" /></NavLink>
        </header>
    )
}