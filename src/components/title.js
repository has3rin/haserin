import React from "react"
import { css } from "@emotion/core"
export default ({ text }) => {
  return (
    <div
      css={css`
        font-size: calc(2rem + 2vw);
        font-weight: 700;
      `}
    >
      {text}
    </div>
  )
}
