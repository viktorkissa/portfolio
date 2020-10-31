import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () =>
  <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span> FrontEnd-Dev</span> all rights reserved
      </h4>
    </div>
  </footer>

export default Footer
