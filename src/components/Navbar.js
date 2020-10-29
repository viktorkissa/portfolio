import React from "react"
import { FaAlignRight } from "react-icons/fa"

import PageLinks from "../constants/links"

import logo from "../assets/logo.svg"

const Navbar = ({toggleSidebar}) =>
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight/>
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>

export default Navbar
