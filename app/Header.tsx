import React from 'react'
import Inner from '@/styles/Inner'
import styled from 'styled-components'
import Link from 'next/link'

function Header() {
  return (
    <Container>
      <Inner>
        <Link href="/">Home</Link>
        <Link href="/signup">회원가입</Link>
        <Link href="/login">로그인</Link>
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
