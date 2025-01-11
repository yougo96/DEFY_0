// import React from 'react';
import { NavLink, Outlet } from 'react-router'

import './static.css'

export default function Static () {

    return (
        <div className='body static'>
            <header>
                <NavLink to="/"><h1 className='defy'>DEFY</h1></NavLink>
            </header>
            <main className='container-fluid'>

                <Outlet />
            </main>
            <footer>
                <span>© 2024 Pradier Hugo. All Rights Reserved.</span>
            </footer>
        </div>
    )
}