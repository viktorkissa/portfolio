import React, {useState} from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// import "../css/main.css"

const Layout = ({ children, pathname }) => {
  const [isOpen, setIsOpen] = useState(false)
  const withAOS = pathname === '/'

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return <>
    <Navbar toggleSidebar={toggleSidebar} withAOS={withAOS} />
    <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
    {children}
    <Footer withAOS={withAOS} />
  </>
}

export default Layout
