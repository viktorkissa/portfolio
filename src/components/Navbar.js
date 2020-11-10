import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link } from 'gatsby'

import PageLinks from "../constants/links"

import logo from "../assets/logo.svg"

const Navbar = ({toggleSidebar, withAOS}) =>
  <nav className="navbar" data-aos={withAOS ? "fade" : ""}>
    <div className="nav-center">
      <div className="nav-header">
        <Link to='/'>
          <img src={logo} alt="logo"/>
        </Link>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight/>
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>

export default Navbar
