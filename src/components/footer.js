import * as React from "react"

import "./styles.css"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => (
  <div className="footer">
    <a href="mailto:clairecheng88@gmail.com">clairecheng88@gmail.com</a>
    &nbsp;&nbsp;
    <a target="_blank" href="https://www.youtube.com/marniescastle">
      <FaYoutube />
    </a>
    &nbsp;&nbsp;
    <a target="_blank" href="https://www.linkedin.com/in/ccheng00/">
      <FaLinkedin />
    </a>
  </div>
)

export default Footer
