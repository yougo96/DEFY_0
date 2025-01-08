import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
// Libs
// import { MantineLogo } from '@mantinex/mantine-logo';
// Components
import Header from '../../components/app/header'
import Sidebar from '../../components/app/sidebar'
import Footer from '../../components/app/footer'
// Files
import './app.css'

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <content>
          <Outlet />
        </content>
      </main>
      <Footer />
      
    </>
  )
}
