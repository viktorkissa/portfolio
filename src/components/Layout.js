import React, {useState} from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// import "../css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return <>
    <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
    {children}
    <Footer/>
  </>
}


export default Layout
