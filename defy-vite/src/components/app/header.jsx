// import React from 'react';
import { NavLink } from "react-router"

export default function Header () {

    return (
        <header>
            <NavLink to="/app"><h1>DEFY</h1></NavLink>
            {/* <MantineLogo size={30} /> */}
            <NavLink to="/app/users/3"><img className="avatar" /></NavLink>
        </header>
    )
}