import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// ye oulet is layout ko as a base use kar lega and upar ke and neeche ki cheejo ko same rhne dega

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
     {/* iska mtlb yha react router dom ki traf se nesting ki ja skti h  */}
    <Footer/>
    </>
  )
}

export default Layout