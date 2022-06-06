import React from 'react'
import { Outlet } from 'react-router-dom'
import Alert from './Alert'
import Footer from './Footer'
import Navbar from './Navbar'

function PageLayout() {
  return (
    <div className="flex flex-col justify-between h-screen">
        <Navbar className="sticky" />
        <div className="container mx-auto py-10">
            <Alert/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default PageLayout