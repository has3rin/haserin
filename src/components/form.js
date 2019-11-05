import React from "react"
import { css } from "emotion"
import styled from "@emotion/styled"

const StyledLabel = styled.label`
  font-size: calc(0.8rem + 0.8vw);
  font-weight: 300;
  margin-top: calc(1rem + 1vw);
`
const StyledInput = styled.input`
  font-weight: 300;
  outline: 0;
  border: none;
  border-bottom: 0.1rem solid lightgrey;
  margin-top: calc(1rem + 1vw);
  &:focus {
    border-bottom: 0.2rem solid silver;
  }
`
const StyledTextarea = styled.textarea`
  font-size: calc(1rem + 1vw);
  font-weight: 300;
  outline: 0;
  resize: none;
  border-color: lightgray;
  margin: calc(1rem + 1vw) 0;
  &:focus {
    border-color: silver;
    border-width: 0.2rem;
  }
`
const StyledButton = styled.button`
  font-size: calc(0.8rem + 0.8vw);
  margin: 1rem auto;
  padding: calc(0.5rem + 0.5vw);
  width: calc(5rem + 5vw);
  border-radius: 0.3rem;
  background: #444;
  outline: none;
  border: none;
  color: white;
  font-weight: 300;
  &:hover {
    background: #222;
  }
`

const Form = () => {
  return (
    <form
      method="post"
      action="#"
      className={css`
        display: flex;
        flex-direction: column;
        width: 70vw;
        max-width: 60rem;
      `}
      autoComplete="off"
    >
      <StyledLabel>Name</StyledLabel>
      <StyledInput
        type="text"
        name="rinrin"
        id="rinrin"
        autoComplete="new-password"
      />
      <StyledLabel>Email</StyledLabel>
      <StyledInput
        type="email"
        name="rinrinrin"
        id="rinrinrin"
        autoComplete="new-password"
      />
      <StyledLabel>Subject</StyledLabel>
      <StyledInput type="text" name="subject" id="subject" />
      <StyledLabel>Message</StyledLabel>
      <StyledTextarea name="message" id="message" rows="5" />
      <StyledButton type="submit">Send</StyledButton>
    </form>
  )
}

export default Form
