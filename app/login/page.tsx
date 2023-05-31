'use client'

import React from 'react'
import Inner from '@/styles/Inner'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Inner>로그인 페이지</Inner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

export default Login
