import React  from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../component/Navbar'

function Layout() {

  return (
    <div>
       <Navbar/> 
        <Outlet/>
    </div>
  )
}

export default Layout