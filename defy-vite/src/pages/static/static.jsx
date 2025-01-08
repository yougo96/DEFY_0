// import React from 'react';
import { NavLink, Outlet } from 'react-router'

import './static.css'

export default function Static () {

    return (
        <body className='static'>
            <header><h1>DEFY</h1></header>
            <main className='container-fluid'>

                <Outlet />
            </main>
            <footer>Footer</footer>
        </body>
    )
}