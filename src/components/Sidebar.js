import React from "react"
import cn from 'classnames'
import { FaTimes } from "react-icons/fa"

import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"

const Sidebar = ({isOpen, toggleSidebar}) =>
  <aside className={cn('sidebar', {'show-sidebar': isOpen})}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FaTimes/>
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
    </div>
  </aside>

export default Sidebar
