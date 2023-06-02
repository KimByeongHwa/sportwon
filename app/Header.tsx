import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Inner from '@/styles/Inner'

function Header() {
  return (
    <Container>
      <Inner>
        <Link href="/">Home</Link>
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #f1f3f5;
`

export default Header
