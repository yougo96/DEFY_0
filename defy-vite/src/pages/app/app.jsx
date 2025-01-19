import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
// Libs
// import { MantineLogo } from '@mantinex/mantine-logo';
// Components
import Header from '../../components/app/layout/header'
import Sidebar from '../../components/app/layout/sidebar'
import Footer from '../../components/app/layout/footer'
// Files
import './app.css'

export default function App() {
  return (
    <div className='body app'> 
      {/* <Header /> */}
      <Sidebar />
      <main className='container-fluid'>
        <Outlet />
      </main>
      {/* <Footer /> */}
      
    </div>
  )
}
