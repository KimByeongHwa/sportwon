import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

function Inner({ children }: Props) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 1130px;
  margin: 0 auto;
  height: 100%;
`

export default Inner
