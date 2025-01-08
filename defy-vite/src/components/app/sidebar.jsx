// import React from 'react';
import { NavLink } from "react-router"

export default function Sidebar () {

    return (
        <sidebar>
            <NavLink to="/app"><h3>1</h3></NavLink>
            <NavLink to="/app"><h3>2</h3></NavLink>
            <NavLink to="/app"><h3>3</h3></NavLink>
            <NavLink to="/app"><h3>4</h3></NavLink>
        </sidebar>
    )
}