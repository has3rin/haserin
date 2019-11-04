/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { css } from "emotion"

const Layout = ({ children }) => {
  return (
    <div
      className={css`
        margin: 0 calc(1.5rem + 8vw);
      `}
    >
      <Header />
      <div
        className={css`
          max-width: 100rem;
          margin: 0 auto;
        `}
      >
        <main className={css``}>{children}</main>
        <footer
          className={css`
            margin: calc(4rem + 4vw) 0 calc(2rem + 2vw);
            font-size: calc(0.7rem + 0.7vw);
          `}
        >
          © Rintaro Hasegawa, Built with Gatsby, Contentful and ❤️, All Rights
          Reserved.
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
