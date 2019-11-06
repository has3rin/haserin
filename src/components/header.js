import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useDispatch, useSelector } from "react-redux"

import { toggleJapanese } from "../actions/index"

import jaIcon from "../images/japan.png"
import enIcon from "../images/uk.png"

const EditedLabel = styled.label`
  &::after {
    background-image: ${props =>
      props.japanese ? `url(${jaIcon})` : `url(${enIcon})`};
  }
`

const Breadcrumb = () => {
  const pathname =
    typeof window !== "undefined" && window.location.pathname.split("/")
  const StyledLink = styled(Link)`
    color: grey;
  `
  const CurrentLink = styled(StyledLink)`
    color: #111;
    font-weight: 400;
  `

  const RenderSlash = () => {
    return (
      <span
        css={css`
          margin: 0 2vw;
        `}
      >
        /
      </span>
    )
  }

  const cap = text => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const RenderLink = () => {
    const RenderChildLink = () => {
      if (pathname[2]) {
        return (
          <>
            <StyledLink to={pathname[1]}>{cap(pathname[1])}</StyledLink>
            <RenderSlash />
            <CurrentLink> {pathname[2]}</CurrentLink>
          </>
        )
      }
      return <CurrentLink to={pathname[1]}>{cap(pathname[1])}</CurrentLink>
    }
    if (pathname[1] === "") {
      return <CurrentLink to="/">Haserin</CurrentLink>
    }
    return (
      <>
        <StyledLink to="/">Haserin</StyledLink>
        <RenderSlash />
        <RenderChildLink />
      </>
    )
  }

  return (
    <div
      css={css`
        font-weight: 300;
        font-size: calc(1.5rem + 0.8vw);
        color: grey;
        margin-right: auto;
      `}
    >
      <RenderLink />
    </div>
  )
}

const Header = ({ data }) => {
  const dispatch = useDispatch()
  const { isJapanese } = useSelector(state => state.language)
  return (
    <header
      css={css`
        margin: calc(1rem + 3vw) 0;
        display: flex;
        align-items: center;
      `}
    >
      <Breadcrumb />
      <div
        css={css`
          // Color Variables
          --green: #2ecc71;
          --lightgray: lightgray;
          --background: whitesmoke;
        `}
      >
        <input
          type="checkbox"
          name="toggle1"
          css={css`
            opacity: 0; // hides checkbox
            position: absolute;
            & + label {
              position: relative;
              display: inline-block;
              user-select: none;
              -moz-transition: 0.4s ease;
              -o-transition: 0.4s ease;
              -webkit-transition: 0.4s ease;
              transition: 0.4s ease;
              -webkit-tap-highlight-color: transparent;
              height: 30px;
              width: 60px;
              border: 1px solid #e4e4e4;
              border-radius: 60px;
              &:before {
                height: 30px;
                width: 61px;
                top: 0;
                left: 0;
                border-radius: 30px;
                /* inactive mixin */
                content: "";
                position: absolute;
                display: block;
                /* before animation */
                -moz-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
                -o-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
                -webkit-transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
                transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
              }
              &:after {
                /* background-image: url(${jaIcon}); */
                background-size: contain;
                height: 28px;
                width: 28px;
                top: 1px;
                left: 0px;
                border-radius: 60px;
                /* inactive mixin */
                content: "";
                position: absolute;
                display: block;
                /* after animation */
                -moz-transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
                -o-transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
                -webkit-transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
                transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
              }
            }
            &:checked {
              & + label:before {
                -moz-transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
                -o-transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
                -webkit-transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
                transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
              }
              & + label:after {
                left: calc(61px - 30px);
              }
            }
          `}
          id="toggle1"
          onChange={() => dispatch(toggleJapanese(!isJapanese))}
          checked={isJapanese}
        />
        <EditedLabel
          css={css`
            position: relative;
            display: inline-block;
            user-select: none;
            -moz-transition: 0.4s ease;
            -o-transition: 0.4s ease;
            -webkit-transition: 0.4s ease;
            transition: 0.4s ease;
            -webkit-tap-highlight-color: transparent;
            height: 30px;
            width: 50px;
            border: 1px solid #e4e4e4;
            border-radius: 60px;
          `}
          for="toggle1"
          japanese={isJapanese}
        >
          <div
            css={css`
              display: flex;
              margin: 0.6rem 0;
              font-size: 1.2rem;
            `}
          >
            <div
              css={css`
                margin-left: 1rem;
              `}
            >
              EN
            </div>
            <div
              css={css`
                margin-left: 1rem;
              `}
            >
              日
            </div>
          </div>
        </EditedLabel>
      </div>
    </header>
  )
}

export default Header
