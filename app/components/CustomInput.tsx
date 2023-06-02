import React from 'react'
import styled from 'styled-components'

function CustomInput() {
  return (
    <>
      <StyledInput />
    </>
  )
}

const StyledInput = styled.input`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  width: 18rem;
  height: 2.2rem;
  font-size: 1.2rem;
  padding: 0.4rem 0.6rem;

  :focus {
    outline: none;
  }
`

export default CustomInput
