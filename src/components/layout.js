/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import { css } from "@emotion/core"
const Layout = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          margin: 0 calc(1.5rem + 8vw) auto;
        `}
      >
        <div
          css={css`
            max-width: 100rem;
            margin: 0 auto;
          `}
        >
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
