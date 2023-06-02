'use client'

import React from 'react'
import styled from 'styled-components'
import Inner from '@/styles/Inner'
import Banner from './Banner'

function Home() {
  return (
    <Container>
      <Inner>
        <Banner />
        Home
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

export default Home
