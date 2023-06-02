import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  children: string
  color?: string
  background?: string
  outline?: boolean
}

function CustomButton({
  children,
  color,
  background,
  outline,
}: ButtonProps): ReactElement {
  return (
    <>
      <StyledButton color={color} background={background} outline={outline}>
        {children}
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.6rem 0.8rem;

  color: ${(props) => props.color || '#333'};
  background: ${(props) => props.background || 'white'};

  ${(props) =>
    props.outline &&
    css`
      color: #333;
      background: white;
      border: 1px solid lightgray;
    `};
`

export default CustomButton
