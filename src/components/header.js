import { Link } from "gatsby"
import React from "react"

const Header = ({ data }) => {
  return (
    <header>
      <Link to="/about">ABOUT</Link>
      <Link to="/project">PROJECT</Link>
      <Link to="/writing">WRITING</Link>
    </header>
  )
}

export default Header
