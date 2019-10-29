import { Link } from "gatsby"
import React from "react"
import { css } from "emotion"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  margin-left: calc(0.5rem + 4vw);
`
const Header = ({ data }) => {
  return (
    <header
      className={css`
        margin: calc(2rem + 4vw) 0 calc(1rem + 2vw);
        display: flex;
        align-items: center;
      `}
    >
      <div
        className={css`
          font-size: calc(1rem + 2vw);
          font-weight: 700;
          flex: 2;
        `}
      >
        <Link
          to="/"
          className={css`
            color: limegreen;
          `}
        >
          Haserin
        </Link>
      </div>
      <div
        className={css`
          flex: 1;
          display: flex;
          font-size: calc(0.8rem + 0.8vw);
          font-weight: 500;
          justify-content: space-between;
        `}
      >
        <StyledLink to="/about">ABOUT</StyledLink>
        <StyledLink to="/project">PROJECTS</StyledLink>
        <StyledLink to="/writing">WRITINGS</StyledLink>
      </div>
    </header>
  )
}

export default Header
