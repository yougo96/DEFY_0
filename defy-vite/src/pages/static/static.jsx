// import React from 'react';
import { NavLink, Outlet } from 'react-router'

import './static.css'

export default function Static () {

    return (
        <>
            <main>
                <header>header</header>

                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    )
}