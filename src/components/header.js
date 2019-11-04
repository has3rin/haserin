import { Link } from "gatsby"
import React from "react"
import { css } from "emotion"
import styled from "@emotion/styled"
import { useDispatch, useSelector } from "react-redux"

import { toggleJapanese } from "../actions/index"

import jaIcon from "../images/japan.png"
import enIcon from "../images/uk.png"

const StyledLink = styled(Link)`
  margin-left: calc(0.5rem + 4vw);
  font-weight: 300;
`
const EditedLabel = styled.label`
  &::after {
    background-image: ${props =>
      props.japanese ? `url(${jaIcon})` : `url(${enIcon})`};
  }
`
const Header = ({ data }) => {
  const dispatch = useDispatch()
  const { isJapanese } = useSelector(state => state.language)
  return (
    <header
      className={css`
        margin: calc(1rem + 3vw) 0;
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
          // Color Variables
          --green: #2ecc71;
          --lightgray: lightgray;
          --background: whitesmoke;
          margin: auto;
        `}
      >
        <input
          type="checkbox"
          name="toggle1"
          className={css`
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
              width: 50px;
              border: 1px solid #e4e4e4;
              border-radius: 60px;
              &:before {
                height: 30px;
                width: 51px;
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
                left: calc(54px - 30px);
              }
            }
          `}
          id="toggle1"
          onChange={() => dispatch(toggleJapanese(!isJapanese))}
          checked={isJapanese}
        />
        <EditedLabel
          className={css`
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
            className={css`
              display: flex;
              margin: 0.7rem;
              font-weight: 200;
            `}
          >
            <div
              className={css`
                margin-right: 1.2rem;
              `}
            >
              EN
            </div>
            <div
              className={css`
                margin-left: 0.2rem;
              `}
            >
              JP
            </div>
          </div>
        </EditedLabel>
      </div>
    </header>
  )
}

export default Header
