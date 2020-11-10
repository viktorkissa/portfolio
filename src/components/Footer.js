import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = ({withAOS}) =>
  <footer className="footer" data-aos={withAOS ? "fade" : ""} data-aos-once="true">
    <div>
      <SocialLinks styleClass="footer-links" />
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span> FrontEnd-Dev</span> all rights reserved
      </h4>
    </div>
  </footer>

export default Footer
