import React from "react"
import { css } from "emotion"
export default ({ text }) => {
  return (
    <div
      className={css`
        font-size: calc(2rem + 2vw);
        font-weight: 700;
      `}
    >
      {text}
    </div>
  )
}
