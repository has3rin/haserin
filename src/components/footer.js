import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

export default () => {
  const pathname = typeof window !== "undefined" && window.location.pathname
  const NormalLink = styled(Link)`
    color: grey;
    margin-right: 2rem;
  `
  const CurrentLink = styled(Link)`
    margin-right: 2rem;
  `
  const StyledLink = ({ towords, name }) => {
    if (towords === pathname) {
      return <CurrentLink to={towords}>{name}</CurrentLink>
    }
    return <NormalLink to={towords}>{name}</NormalLink>
  }

  return (
    <footer
      css={css`
        color: grey;
        margin-top: 5rem;
        height: 10rem;
        background: #f8f8f8;
        padding: 5rem;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          max-width: 70rem;
        `}
      >
        <div
          css={css`
            display: flex;
          `}
        >
          <StyledLink towords="/" name="Home" />
          <StyledLink towords="/about" name="About" />
          <StyledLink towords="/project" name="Project" />
          <StyledLink towords="/writing" name="Writing" />
        </div>
        <div
          css={css`
            margin-top: 2rem;
            font-size: calc(1.2rem + 0.3vw);
          `}
        >
          © Rintaro Hasegawa, Built with Gatsby, Emotion and Contentful️, All
          Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
